import { AxiosError, AxiosResponse } from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IApartment } from "../interfaces/apartment";
import { IBuilding } from "../interfaces/building";
import { IAuthProvider, IDataPerson, IPerson } from "../interfaces/person";
import api from "../services/api";

interface IRegisterProvider {
  registerFunction: (data: IDataPerson) => void;
  naturalState: boolean;
  setNaturalState: (value: boolean) => void;
  legalState: boolean;
  setLegalState: (value: boolean) => void;
  registerBuildingFunction: (data: IBuilding) => void;
  registerApartmentFunction: (data: IApartment) => void;
}

export const RegisterContext = createContext({} as IRegisterProvider);

const RegisterProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const [naturalState, setNaturalState] = useState(false);
  const [legalState, setLegalState] = useState(false);

  const registerFunction = (data: IDataPerson) => {
    const address = {
      public_place: data.public_place,
      number: data.number,
      zip_code: data.zip_code,
      complement: data.complement,
      district: data.district,
      city: data.city,
      state: data.state,
      country: data.country,
    };

    const newPerson: IPerson = {
      name: data.name,
      email: data.email,
      legalPerson: legalState,
      naturalPerson: naturalState,
      password: data.password,
      telephone: data.telephone,
      type: data.type,
      address: address,
    };

    if (legalState) {
      newPerson.legal_person = {
        cnpj: data.cnpj,
        fantasy_name: data.fantasy_name,
        incorporation_date: data.incorporation_date,
        regime_type: data.regime_type,
        registration: data.registration,
      };
    }

    if (naturalState) {
      newPerson.natural_person = {
        birth_date: data.birth_date,
        cpf: data.cpf,
        ethnicity: data.ethnicity,
        gender: data.gender,
        income: data.income,
        marital_status: data.marital_status,
        nationality: data.nationality,
        occupation: data.occupation,
        rg: data.rg,
      };
    }

    api
      .post("/persons", newPerson)
      .then((response: AxiosResponse) => {
        if (response.status === 201) {
          toast.success("Cadastro realizado com sucesso", {
            onClose: () => navigate("/home"),
          });
        }
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  const registerBuildingFunction = (data: IBuilding) => {
    const newBuilding: IBuilding = {
      ...data,
    };
    const token = localStorage.getItem("@TOKEN");

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    api
      .post("/buildings", newBuilding)
      .then((response: AxiosResponse) => {
        console.log(response);
        if (response.status === 201) {
          toast.success("Edifício cadastrado!");
        }
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  const registerApartmentFunction = (data: IApartment) => {
    const newApartment: IApartment = {
      ...data,
    };
    const token = localStorage.getItem("@TOKEN");

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    api
      .post(`/apartments/${data.buildings}`, newApartment)
      .then((response: AxiosResponse) => {
        console.log(response);
        if (response.status === 201) {
          toast.success("Apartamento cadastrado!");
        }
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  return (
    <RegisterContext.Provider
      value={{
        registerFunction,
        naturalState,
        legalState,
        setLegalState,
        setNaturalState,
        registerBuildingFunction,
        registerApartmentFunction,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export function useRegisterContext() {
  const context = useContext(RegisterContext);

  return context;
}

export default RegisterProvider;
