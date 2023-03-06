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
import { useRegisterContext } from "../../contexts/registerContext";
import { useMainContext } from "../../contexts/mainContext";
import { IBuilding } from "../../interfaces/building";

const FormRegisterApartment = () => {
  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm<IApartment>({ resolver: yupResolver(schemaRegisterApartment) });

  const { registerApartmentFunction } = useRegisterContext();
  const { listBuildings } = useMainContext();

  const optionsBuildings = () => {
    return (
      <>
        <option disabled selected>
          Selecione o edificio
        </option>
        {listBuildings.map((building: IBuilding, id: number) => {
          return <option value={building.id}>Edificio {building.name}</option>;
        })}
      </>
    );
  };

  return (
    <FormRegisterApartmentDiv>
      <Form onSubmit={handleSubmit(registerApartmentFunction)}>
        <h2>Cadastre seu apartamento</h2>

        <FormGroup>
          <Label for="exampleSelectMulti2"> Selecione o edificio</Label>
          <select id="exampleSelectMulti2" {...register("buildings")}>
            {optionsBuildings()}
          </select>
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelectMulti">Tipo de Imóvel</Label>

          <select id="exampleSelectMulti" {...register("type")}>
            <option disabled selected>
              Selecione o tipo
            </option>
            <option value="Apartamento">Apartamento</option>
          </select>
          {errors.type && <span>{errors.type.message}</span>}
        </FormGroup>

        <FormGroup>
          <Label>Andar</Label>
          <input
            className="form-control"
            placeholder="Digite seu nome"
            {...register("floor")}
          />
          {errors.floor && <span>{errors.floor.message}</span>}
        </FormGroup>

        <FormGroup>
          <Label>Número do apartamento</Label>
          <input
            className="form-control"
            placeholder="Digite seu nome"
            {...register("number")}
          />
          {errors.number && <span>{errors.number.message}</span>}
        </FormGroup>

        <FormGroup>
          <Label>Quantidade de dormitórios</Label>
          <input
            className="form-control"
            placeholder="Digite seu nome"
            {...register("dorms")}
          />
          {errors.dorms && <span>{errors.dorms.message}</span>}
        </FormGroup>

        <FormGroup>
          <Label>Quantidade de Suítes</Label>
          <input
            className="form-control"
            placeholder="Digite seu nome"
            {...register("suites")}
          />
          {errors.suites && <span>{errors.suites.message}</span>}
        </FormGroup>

        <FormGroup>
          <Label>Quantidade de Banheiros</Label>
          <input
            className="form-control"
            placeholder="Digite seu nome"
            {...register("bathrooms")}
          />
          {errors.bathrooms && <span>{errors.bathrooms.message}</span>}
        </FormGroup>

        <FormGroup>
          <Label>Quantidade de vagas de Garagem</Label>
          <input
            className="form-control"
            placeholder="Digite seu nome"
            {...register("vacancies")}
          />
          {errors.vacancies && <span>{errors.vacancies.message}</span>}
        </FormGroup>

        <FormGroup>
          <Label>Área total</Label>
          <input
            className="form-control"
            placeholder="Digite seu nome"
            {...register("total_area")}
          />
          {errors.total_area && <span>{errors.total_area.message}</span>}
        </FormGroup>

        <FormGroup>
          <Label>Área privativa</Label>
          <input
            className="form-control"
            placeholder="Digite seu nome"
            {...register("private_area")}
          />
          {errors.private_area && <span>{errors.private_area.message}</span>}
        </FormGroup>

        <FormGroup>
          <Label>Valor</Label>
          <input
            className="form-control"
            placeholder="Digite seu nome"
            {...register("value_rent")}
          />
          {errors.value_rent && <span>{errors.value_rent.message}</span>}
        </FormGroup>

        <FormGroup tag="fieldset">
          <Label>Disponivel</Label>
          <FormGroup check>
            <input type="radio" value="Sim" {...register("available")} />{" "}
            <Label check>Sim</Label>
          </FormGroup>
          <FormGroup check>
            <input type="radio" value="Não" {...register("available")} />{" "}
            <Label check>Não</Label>
          </FormGroup>
          {errors.available && <span>{errors.available.message}</span>}
        </FormGroup>

        <FormGroup tag="fieldset">
          <Label>Visível</Label>
          <FormGroup check>
            <input type="radio" value="Sim" {...register("visible")} />{" "}
            <Label check>Sim</Label>
          </FormGroup>
          <FormGroup check>
            <input type="radio" value="Não" {...register("visible")} />{" "}
            <Label check>Não</Label>
          </FormGroup>
          {errors.visible && <span>{errors.visible.message}</span>}
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
