import { FormRegisterComponent } from "./styles";
import { Button, Form, FormFeedback, FormGroup, Label } from "reactstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IDataPerson } from "../../interfaces/person";
import { schemaRegisterPerson } from "../../validators/schema";
import { useRegisterContext } from "../../contexts/registerContext";
import { AxiosError, AxiosResponse } from "axios";

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm<IDataPerson>({
    resolver: yupResolver(schemaRegisterPerson),
  });

  const {
    registerFunction,
    legalState,
    naturalState,
    setLegalState,
    setNaturalState,
  } = useRegisterContext();

  return (
    <FormRegisterComponent>
      <Form onSubmit={handleSubmit(registerFunction)}>
        <h2>Cadastre-se</h2>

        <FormGroup>
          <Label for="exampleZip">Tipo de Conta</Label>

          <FormGroup check>
            <input
              type="radio"
              {...register("type")}
              value="Locador"
              defaultChecked
            />{" "}
            <Label check>Locador</Label>
          </FormGroup>
          <FormGroup check>
            <input type="radio" value="Locatario" {...register("type")} />{" "}
            <Label check>Locatário</Label>
          </FormGroup>

          {errors.type && <span>{errors.type.message}</span>}
        </FormGroup>

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
          {errors.password && <span>{errors.password.message}</span>}
        </FormGroup>

        <FormGroup>
          <Label>Confirmar Senha</Label>
          <input
            className="form-control"
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </FormGroup>

        <FormGroup>
          <Label for="exampleAddress">Logradouro</Label>
          <input
            className="form-control"
            placeholder="Digite seu endereço"
            {...register("public_place")}
          />
          {errors.public_place && <span>{errors.public_place.message}</span>}
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress">Numero</Label>
          <input
            className="form-control"
            placeholder="Digite o número da sua residência"
            {...register("number")}
          />
          {errors.number && errors.number.message}
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress2">Complemento</Label>
          <input
            className="form-control"
            placeholder="Complemento do endereço"
            {...register("complement")}
          />
          {errors.complement && errors.complement.message}
        </FormGroup>

        <FormGroup>
          <Label for="exampleCity">Bairro</Label>
          <input
            className="form-control"
            placeholder="Digite o Bairro"
            {...register("district")}
          />
          {errors.district && <span>{errors.district.message}</span>}
        </FormGroup>

        <FormGroup>
          <Label for="exampleCity">Cidade</Label>
          <input
            className="form-control"
            placeholder="Digite a cidade"
            {...register("city")}
          />
          {errors.city && <span>{errors.city.message}</span>}
        </FormGroup>

        <FormGroup>
          <Label for="exampleState">Estado</Label>
          <input
            className="form-control"
            placeholder="Digite o estado"
            {...register("state")}
          />
          {errors.state && <span>{errors.state.message}</span>}
        </FormGroup>

        <FormGroup>
          <Label for="exampleZip">Cep</Label>
          <input
            className="form-control"
            placeholder="Digite o cep"
            {...register("zip_code")}
          />
          {errors.zip_code && <span>{errors.zip_code.message}</span>}
        </FormGroup>

        <FormGroup>
          <Label for="exampleZip">País</Label>
          <input
            className="form-control"
            placeholder="Digite o país"
            {...register("country")}
          />
          {errors.country && <span>{errors.country.message}</span>}
        </FormGroup>

        <FormGroup switch>
          <input
            type="radio"
            checked={naturalState}
            onClick={() => {
              setNaturalState(!naturalState);
            }}
            value={naturalState ? "Sim" : "Não"}
            {...register("naturalPerson")}
          />

          {errors.naturalPerson && <span>{errors.naturalPerson.message}</span>}
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
              {errors.rg && <span>{errors.rg.message}</span>}
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">CPF</Label>
              <input
                className="form-control"
                placeholder="Digite o CPF"
                {...register("cpf")}
              />
              {errors.cpf && <span>{errors.cpf.message}</span>}
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Data de Nascimento</Label>
              <input
                className="form-control"
                placeholder="Digite a data de nascimento"
                {...register("birth_date")}
              />
              {errors.birth_date && <span>{errors.birth_date.message}</span>}
            </FormGroup>

            <FormGroup tag="fieldset">
              <Label for="exampleZip">Gênero</Label>

              <FormGroup check>
                <input
                  type="radio"
                  {...register("gender")}
                  value="masculino"
                  defaultChecked
                />{" "}
                <Label check>Masculino</Label>
              </FormGroup>
              <FormGroup check>
                <input type="radio" value="Feminino" {...register("gender")} />{" "}
                <Label check>Feminino</Label>
              </FormGroup>
              {errors.gender && <span>{errors.gender.message}</span>}
            </FormGroup>

            <FormGroup>
              <Label for="exampleSelectMulti">Raça</Label>

              <select id="exampleSelectMulti" {...register("ethnicity")}>
                <option value="" disabled>
                  Selecione a raça
                </option>
                <option value="Branca">Branca</option>
                <option value="Parda">Parda</option>
                <option value="Amarela">Amarela</option>
                <option value="Indigena">Indigena</option>
                <option value="Asiatica">Asiatica</option>
                <option value="Preta">Preta</option>
              </select>
              {errors.ethnicity && <span>{errors.ethnicity.message}</span>}
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Profissão</Label>
              <input
                className="form-control"
                placeholder="Digite sua senha"
                {...register("occupation")}
              />
              {errors.occupation && <span>{errors.occupation.message}</span>}
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Renda</Label>
              <input
                className="form-control"
                placeholder="Digite sua senha"
                {...register("income")}
              />
              {errors.income && <span>{errors.income.message}</span>}
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Estado Civil</Label>
              <input
                className="form-control"
                placeholder="Digite sua senha"
                {...register("marital_status")}
              />
              {errors.marital_status && (
                <span>{errors.marital_status.message}</span>
              )}
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Nacionalidade</Label>
              <input
                className="form-control"
                placeholder="Digite sua senha"
                {...register("nationality")}
              />
              {errors.nationality && <span>{errors.nationality.message}</span>}
            </FormGroup>
          </>
        )}

        <FormGroup switch>
          <input
            type="radio"
            checked={legalState}
            onClick={() => {
              setLegalState(!legalState);
            }}
            value={legalState ? "Sim" : "Não"}
            {...register("legalPerson")}
          />

          {errors.legalPerson && <span>{errors.legalPerson.message}</span>}
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
              {errors.cnpj && <span>{errors.cnpj.message}</span>}
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Nome Fantasia</Label>
              <input
                className="form-control"
                placeholder="Digite sua senha"
                {...register("fantasy_name")}
              />
              {errors.fantasy_name && (
                <span>{errors.fantasy_name.message}</span>
              )}
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Registro</Label>
              <input
                className="form-control"
                placeholder="Digite sua senha"
                {...register("registration")}
              />
              {errors.registration && (
                <span>{errors.registration.message}</span>
              )}
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Data de incorporação</Label>
              <input
                className="form-control"
                placeholder="Digite sua senha"
                {...register("incorporation_date")}
              />
              {errors.incorporation_date && (
                <span>{errors.incorporation_date.message}</span>
              )}
            </FormGroup>

            <FormGroup>
              <Label for="exampleZip">Tipo de regime</Label>
              <input
                className="form-control"
                placeholder="Digite sua senha"
                {...register("regime_type")}
              />
              {errors.regime_type && <span>{errors.regime_type.message}</span>}
            </FormGroup>
          </>
        )}

        <Button type="submit">Cadastrar</Button>
      </Form>
    </FormRegisterComponent>
  );
};

export { FormRegister };
