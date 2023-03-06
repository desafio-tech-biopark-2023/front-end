import { IBuilding } from "./building";
import { IPerson } from "./person";

export interface IApartment {
  buildings: string;
  type: string;
  floor: string;
  number: string;
  dorms: string;
  suites: string;
  bathrooms: string;
  vacancies: string;
  total_area: string;
  private_area: string;
  available: string;
  value_rent: string;
  visible: string;
  building?: IBuilding;
  person?: IPersonRent;
}

export interface IPersonRent {
  name: string;
  email: string;
  legalPerson: boolean;
  naturalPerson: boolean;
  password: string;
  confirmPassword?: string;
  telephone: string;
  type: string;
}

export interface IRent {
  monthly_rent_value: string;
  date_start_rent: string;
  date_end_rent: string;
  apartment: IApartment;
  person: IPersonRent;
}
