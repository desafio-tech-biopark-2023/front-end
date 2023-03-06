import { AxiosError, AxiosResponse } from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { IApartment, IRent, IRentApartment } from "../interfaces/apartment";
import { IBuilding } from "../interfaces/building";
import { IAuthProvider } from "../interfaces/person";
import api from "../services/api";

interface IMainContextProvider {
  listRents: IRent[];
  setListRents: (data: never[]) => void;
  listApartments: IApartment[];
  setListApartments: (data: never[]) => void;
  listBuildings: IBuilding[];
  setListBuildings: (data: never[]) => void;
}

export const MainContext = createContext({} as IMainContextProvider);

const MainProvider = ({ children }: IAuthProvider) => {
  const [listRents, setListRents] = useState([]);
  const [listApartments, setListApartments] = useState([]);
  const [listBuildings, setListBuildings] = useState([]);

  useEffect(() => {
    api
      .get("/rents")
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          setListRents(response.data);
        }
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });

    api
      .get("/apartments")
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          setListApartments(response.data);
        }
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });

    api
      .get("/buildings")
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          setListBuildings(response.data);
        }
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  }, []);

  return (
    <MainContext.Provider
      value={{
        listRents,
        setListRents,
        listApartments,
        setListApartments,
        listBuildings,
        setListBuildings,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export function useMainContext() {
  const context = useContext(MainContext);

  return context;
}

export default MainProvider;
