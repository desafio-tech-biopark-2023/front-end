import { AxiosError, AxiosResponse } from "axios";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IAuthProvider, ILogin } from "../interfaces/person";
import api from "../services/api";

interface ISessionProvider {
  login: (data: ILogin) => void;
}

export const SessionContext = createContext({} as ISessionProvider);

const SessionProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();

  const login = (data: ILogin) => {
    console.log(data);
    api
      .post("/login", {
        email: data.email,
        password: data.password,
      })
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          const { token } = response.data;
          console.log(token);
          localStorage.setItem("@TOKEN", token);
          navigate("/home");
        }
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  return (
    <SessionContext.Provider value={{ login }}>
      {children}
    </SessionContext.Provider>
  );
};

export function useSessionContext() {
  const context = useContext(SessionContext);

  return context;
}

export default SessionProvider;
