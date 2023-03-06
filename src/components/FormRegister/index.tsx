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
import { useRegisterContext } from "../../contexts/registerContext";

const FormRegister = () => {
  const [naturalState, setNaturalState] = useState(true);
  const [legalState, setLegalState] = useState(true);

  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm<IDataPerson>({ resolver: yupResolver(schemaRegisterPerson) });

  const { registerFunction } = useRegisterContext();

  return (
    <FormRegisterComponent>
      <Form onSubmit={handleSubmit(registerFunction)}>
        <h2>Cadastre-se</h2>

        <FormGroup>
          <Label>Nome</Label>
          <input
            className="form-control"
            placeholder="Digite seu nome"
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <input
            className="form-control"
            placeholder="Digite seu email"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </FormGroup>

        <FormGroup>
          <Label>Telefone</Label>
          <input
            className="form-control"
            placeholder="Digite seu telefone"
            {...register("telephone")}
          />
          {errors.telephone && <span>{errors.telephone.message}</span>}
        </FormGroup>

        <FormGroup>
          <Label>Senha</Label>
          <input
            className="form-control"
            placeholder="Digite sua senha"
            {...register("password")}
          />
        </FormGroup>

        <FormGroup>
          <Label>Confirmar Senha</Label>
          <input
            className="form-control"
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleAddress">Logradouro</Label>
          <input
            className="form-control"
            placeholder="Digite seu endereço"
            {...register("public_place")}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress">Numero</Label>
          <input
            className="form-control"
            placeholder="Digite o número da sua residência"
            {...register("number")}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress2">Complemento</Label>
          <input
            className="form-control"
            placeholder="Complemento do endereço"
            {...register("complement")}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleCity">Bairro</Label>
          <input
            className="form-control"
            placeholder="Digite o Bairro"
            {...register("district")}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleCity">Cidade</Label>
          <input
            className="form-control"
            placeholder="Digite a cidade"
            {...register("city")}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleState">Estado</Label>
          <input
            className="form-control"
            placeholder="Digite o estado"
            {...register("state")}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleZip">Cep</Label>
          <input
            className="form-control"
            placeholder="Digite o cep"
            {...register("zip_code")}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleZip">País</Label>
          <input
            className="form-control"
            placeholder="Digite o país"
            {...register("country")}
          />
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
              <input
                className="form-control"
                placeholder="Digite o RG"
                {...register("rg")}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">CPF</Label>
              <input
                className="form-control"
                placeholder="Digite o CPF"
                {...register("cpf")}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Data de Nascimento</Label>
              <input
                className="form-control"
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
              <input
                className="form-control"
                placeholder="Digite sua senha"
                {...register("occupation")}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Renda</Label>
              <input
                className="form-control"
                placeholder="Digite sua senha"
                {...register("income")}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Estado Civil</Label>
              <input
                className="form-control"
                placeholder="Digite sua senha"
                {...register("marital_status")}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Nacionalidade</Label>
              <input
                className="form-control"
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
              <input
                className="form-control"
                placeholder="Digite sua senha"
                {...register("cnpj")}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Nome Fantasia</Label>
              <input
                className="form-control"
                placeholder="Digite sua senha"
                {...register("fantasy_name")}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Registro</Label>
              <input
                className="form-control"
                placeholder="Digite sua senha"
                {...register("registration")}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Data de incorporação</Label>
              <input
                className="form-control"
                placeholder="Digite sua senha"
                {...register("incorporation_date")}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Tipo de regime</Label>
              <input
                className="form-control"
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
