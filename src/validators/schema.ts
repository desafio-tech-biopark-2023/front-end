import * as yup from "yup";

export const schemaRegisterPerson = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Email invalido").required("Campo obrigatório"),
  legalPerson: yup.boolean().required("Campo obrigatório"),
  naturalPerson: yup.boolean().required("Campo obrigatório"),
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
  type: yup.string().required("Campo obrigatório"),
  public_place: yup.string().required("Campo obrigatório"),
  number: yup.string().required("Campo obrigatório"),
  zip_code: yup.string().required("Campo obrigatório"),
  complement: yup.string().required("Campo obrigatório"),
  district: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
  country: yup.string().required("Campo obrigatório"),
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
