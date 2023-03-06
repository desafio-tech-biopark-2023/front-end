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
import { FormRegisterApartmentDiv } from "./style";
import { IApartment } from "../../interfaces/apartment";
import { schemaRegisterApartment } from "../../validators/schema";
import { ToastContainer } from "react-toastify";

const FormRegisterApartment = () => {
  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm<IApartment>({ resolver: yupResolver(schemaRegisterApartment) });

  const registerApartmentFunction = (data: IApartment) => {
    console.log(data);
  };

  return (
    <FormRegisterApartmentDiv>
      <Form onSubmit={handleSubmit(registerApartmentFunction)}>
        <h2>Cadastre seu apartamento</h2>
        <FormGroup>
          <Label for="exampleSelectMulti">Tipo de Imóvel</Label>

          <Input id="exampleSelectMulti" type="select" {...register("type")}>
            <option disabled>Selecione o tipo</option>
            <option>Apartamento</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label>Andar</Label>
          <input
            className="form-control"
            placeholder="Digite seu nome"
            {...register("floor")}
          />
        </FormGroup>

        <FormGroup>
          <Label>Número do apartamento</Label>
          <input
            className="form-control"
            placeholder="Digite seu nome"
            {...register("number")}
          />
        </FormGroup>

        <FormGroup>
          <Label>Quantidade de dormitórios</Label>
          <input
            className="form-control"
            placeholder="Digite seu nome"
            {...register("dorms")}
          />
        </FormGroup>

        <FormGroup>
          <Label>Quantidade de Suítes</Label>
          <input
            className="form-control"
            placeholder="Digite seu nome"
            {...register("suites")}
          />
        </FormGroup>

        <FormGroup>
          <Label>Quantidade de Banheiros</Label>
          <input
            className="form-control"
            placeholder="Digite seu nome"
            {...register("bathrooms")}
          />
        </FormGroup>

        <FormGroup>
          <Label>Quantidade de vagas de Garagem</Label>
          <input
            className="form-control"
            placeholder="Digite seu nome"
            {...register("vacancies")}
          />
        </FormGroup>

        <FormGroup>
          <Label>Área total</Label>
          <input
            className="form-control"
            placeholder="Digite seu nome"
            {...register("total_area")}
          />
        </FormGroup>

        <FormGroup>
          <Label>Área privativa</Label>
          <input
            className="form-control"
            placeholder="Digite seu nome"
            {...register("private_area")}
          />
        </FormGroup>

        <FormGroup tag="fieldset">
          <Label>Disponivel</Label>
          <FormGroup check>
            <Input type="radio" {...register("available")} />{" "}
            <Label check>Sim</Label>
          </FormGroup>
          <FormGroup check>
            <Input type="radio" {...register("available")} />{" "}
            <Label check>Não</Label>
          </FormGroup>
        </FormGroup>

        <FormGroup tag="fieldset">
          <Label>Visível</Label>
          <FormGroup check>
            <Input type="radio" {...register("visible")} />{" "}
            <Label check>Sim</Label>
          </FormGroup>
          <FormGroup check>
            <Input type="radio" {...register("visible")} />{" "}
            <Label check>Não</Label>
          </FormGroup>
        </FormGroup>

        <Button type="submit">Cadastrar</Button>
      </Form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </FormRegisterApartmentDiv>
  );
};

export { FormRegisterApartment };
