import * as yup from "yup";

export const schemaRegisterPerson = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Email invalido").required("Campo obrigatório"),
  legalPerson: yup.string().notRequired().nullable(),
  naturalPerson: yup.string().notRequired().nullable(),
  password: yup
    .string()
    .required("Campo obrigatório")
    .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "Senhas não são iguais"),
  telephone: yup.string().required("Campo obrigatório"),
  type: yup.string().notRequired(),
  public_place: yup.string().required("Campo obrigatório"),
  number: yup.string().required("Campo obrigatório"),
  zip_code: yup.string().required("Campo obrigatório"),
  complement: yup.string().required("Campo obrigatório"),
  district: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
  country: yup.string().required("Campo obrigatório"),
  rg: yup.string().notRequired().nullable(),
  cpf: yup.string().notRequired().nullable(),
  birth_date: yup.string().notRequired().nullable(),
  gender: yup.string().notRequired().nullable(),
  ethnicity: yup.string().notRequired().nullable(),
  occupation: yup.string().notRequired().nullable(),
  income: yup.string().notRequired().nullable(),
  marital_status: yup.string().notRequired().nullable(),
  nationality: yup.string().notRequired().nullable(),
  cnpj: yup.string().notRequired().nullable(),
  fantasy_name: yup.string().notRequired().nullable(),
  registration: yup.string().notRequired().nullable(),
  incorporation_date: yup.string().notRequired().nullable(),
  regime_type: yup.string().notRequired().nullable(),
});

export const schemaRegisterBuilding = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  type: yup.string().required("Campo obrigatório"),
  floors: yup.string().required("Campo obrigatório"),
  logo: yup.string().required("Campo obrigatório"),
  apartments_per_floor: yup.string().required("Campo obrigatório"),
  apartments_available: yup.string().required("Campo obrigatório"),
});

export const schemaRegisterApartment = yup.object().shape({
  buildings: yup.string().required("Campo Obrigatório"),
  type: yup.string().required("Campo Obrigatório"),
  floor: yup.string().required("Campo obrigatório"),
  number: yup.string().required("Campo obrigatório"),
  dorms: yup.string().required("Campo obrigatório"),
  suites: yup.string().required("Campo obrigatório"),
  bathrooms: yup.string().required("Campo obrigatório"),
  vacancies: yup.string().required("Campo obrigatório"),
  total_area: yup.string().required("Campo obrigatório"),
  private_area: yup.string().required("Campo obrigatório"),
  available: yup.string().required("Campo obrigatório"),
  visible: yup.string().required("Campo obrigatório"),
});

export const schemaLogin = yup.object().shape({
  email: yup.string().email().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
  // .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
  // .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
  // .matches(/(\d)/, "deve conter ao menos 1 número")
  // .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
  // .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
});
