export interface IDataPerson {
  name: string;
  email: string;
  legalPerson: boolean;
  naturalPerson: boolean;
  password: string;
  confirmPassword?: string;
  telephone: string;
  type: string;
  public_place: string;
  number: string;
  zip_code: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  country: string;
  cnpj: string;
  fantasy_name: string;
  registration: string;
  incorporation_date: string;
  regime_type: string;
  rg: string;
  cpf: string;
  birth_date: string;
  gender: string;
  ethnicity: string;
  occupation: string;
  income: string;
  marital_status: string;
  nationality: string;
}

export interface IPerson {
  name: string;
  email: string;
  legalPerson: boolean;
  naturalPerson: boolean;
  password: string;
  confirmPassword?: string;
  telephone: string;
  type: string;
  address: IAddress;
  legal_person?: ILegalPerson;
  natural_person?: INaturalPerson;
}

export interface IAddress {
  public_place: string;
  number: string;
  zip_code: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  country: string;
}

export interface INaturalPerson {
  rg: string;
  cpf: string;
  birth_date: string;
  gender: string;
  ethnicity: string;
  occupation: string;
  income: string;
  marital_status: string;
  nationality: string;
}

export interface ILegalPerson {
  cnpj: string;
  fantasy_name: string;
  registration: string;
  incorporation_date: string;
  regime_type: string;
}
