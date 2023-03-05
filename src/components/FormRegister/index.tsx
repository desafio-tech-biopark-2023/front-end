import { FormRegisterComponent } from "./styles";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IDataPerson, IPerson } from "../../interfaces/person";
import { schemaRegisterPerson } from "../../validators/schema";
import { useState } from "react";

const FormRegister = () => {
  const [naturalState, setNaturalState] = useState(true);
  const [legalState, setLegalState] = useState(true);

  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm<IDataPerson>({ resolver: yupResolver(schemaRegisterPerson) });

  const registerFunction = (data: IDataPerson) => {
    console.log(data);
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
      legalPerson: data.legalPerson,
      naturalPerson: data.naturalPerson,
      password: data.password,
      telephone: data.telephone,
      type: data.type,
      address: address,
    };

    if (data.legalPerson) {
      newPerson.legal_person = {
        cnpj: data.cnpj,
        fantasy_name: data.fantasy_name,
        incorporation_date: data.incorporation_date,
        regime_type: data.regime_type,
        registration: data.registration,
      };
    }

    if (data.naturalPerson) {
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

    console.log(newPerson);
  };

  return (
    <FormRegisterComponent>
      <Form onSubmit={handleSubmit(registerFunction)}>
        <h2>Cadastre-se</h2>

        <FormGroup>
          <Label>Nome</Label>
          <Input
            placeholder="Digite seu nome"
            {...register("name")}
            error={errors.name}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input placeholder="Digite seu email" {...register("email")} />
        </FormGroup>

        <FormGroup>
          <Label>Telefone</Label>
          <Input placeholder="Digite seu telefone" {...register("telephone")} />
        </FormGroup>

        <FormGroup>
          <Label>Senha</Label>
          <Input placeholder="Digite sua senha" {...register("password")} />
        </FormGroup>

        <FormGroup>
          <Label>Confirmar Senha</Label>
          <Input
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleAddress">Logradouro</Label>
          <Input
            placeholder="Digite seu endereço"
            {...register("public_place")}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress">Numero</Label>
          <Input
            placeholder="Digite o número da sua residência"
            {...register("number")}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress2">Complemento</Label>
          <Input
            placeholder="Complemento do endereço"
            {...register("complement")}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleCity">Bairro</Label>
          <Input placeholder="Digite o Bairro" {...register("district")} />
        </FormGroup>

        <FormGroup>
          <Label for="exampleCity">Cidade</Label>
          <Input placeholder="Digite a cidade" {...register("city")} />
        </FormGroup>

        <FormGroup>
          <Label for="exampleState">Estado</Label>
          <Input placeholder="Digite o estado" {...register("state")} />
        </FormGroup>

        <FormGroup>
          <Label for="exampleZip">Cep</Label>
          <Input placeholder="Digite o cep" {...register("zip_code")} />
        </FormGroup>

        <FormGroup>
          <Label for="exampleZip">País</Label>
          <Input placeholder="Digite o país" {...register("country")} />
        </FormGroup>

        <FormGroup switch>
          <Input
            type="switch"
            checked={naturalState}
            onClick={() => {
              setNaturalState(!naturalState);
            }}
            {...register("naturalPerson")}
          />
          <Label check>Pessoa Física</Label>
        </FormGroup>

        {naturalState && (
          <>
            <FormGroup>
              <Label for="exampleZip">RG</Label>
              <Input placeholder="Digite o RG" {...register("rg")} />
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">CPF</Label>
              <Input placeholder="Digite o CPF" {...register("cpf")} />
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Data de Nascimento</Label>
              <Input
                placeholder="Digite a data de nascimento"
                {...register("birth_date")}
              />
            </FormGroup>

            <FormGroup tag="fieldset">
              <Label for="exampleZip">Gênero</Label>

              <FormGroup check>
                <Input name="masc" type="radio" />{" "}
                <Label check>Masculino</Label>
              </FormGroup>
              <FormGroup check>
                <Input name="fem" type="radio" /> <Label check>Feminino</Label>
              </FormGroup>
            </FormGroup>

            <FormGroup>
              <Label for="exampleSelectMulti">Raça</Label>

              <Input
                id="exampleSelectMulti"
                type="select"
                {...register("ethnicity")}
              >
                <option disabled>Selecione a raça</option>
                <option>Branca</option>
                <option>Parda</option>
                <option>Amarela</option>
                <option>Indigena</option>
                <option>Asiatica</option>
                <option>Preta</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Profissão</Label>
              <Input
                placeholder="Digite sua senha"
                {...register("occupation")}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Renda</Label>
              <Input placeholder="Digite sua senha" {...register("income")} />
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Estado Civil</Label>
              <Input
                placeholder="Digite sua senha"
                {...register("marital_status")}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Nacionalidade</Label>
              <Input
                placeholder="Digite sua senha"
                {...register("nationality")}
              />
            </FormGroup>
          </>
        )}

        <FormGroup switch>
          <Input
            type="switch"
            checked={legalState}
            onClick={() => {
              setLegalState(!legalState);
            }}
            {...register("legalPerson")}
          />
          <Label check>Pessoa Jurídica</Label>
        </FormGroup>

        {legalState && (
          <>
            <FormGroup>
              <Label for="exampleZip">CNPJ</Label>
              <Input placeholder="Digite sua senha" {...register("cnpj")} />
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Nome Fantasia</Label>
              <Input
                placeholder="Digite sua senha"
                {...register("fantasy_name")}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Registro</Label>
              <Input
                placeholder="Digite sua senha"
                {...register("registration")}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Data de incorporação</Label>
              <Input
                placeholder="Digite sua senha"
                {...register("incorporation_date")}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Tipo de regime</Label>
              <Input
                placeholder="Digite sua senha"
                {...register("regime_type")}
              />
            </FormGroup>
          </>
        )}

        <Button type="submit">Cadastrar</Button>
      </Form>
    </FormRegisterComponent>
  );
};

export { FormRegister };
