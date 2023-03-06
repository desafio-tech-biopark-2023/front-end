import { FormRegisterBuildingComponent } from "./style";
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
import { IBuilding } from "../../interfaces/building";
import { schemaRegisterBuilding } from "../../validators/schema";
import { ToastContainer } from "react-toastify";

const FormRegisterBuilding = () => {
  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm<IBuilding>({ resolver: yupResolver(schemaRegisterBuilding) });

  const registerBuildingFunction = (data: IBuilding) => {
    console.log(data);

    const newBuilding: IBuilding = {
      ...data,
    };

    console.log(newBuilding);
  };

  return (
    <FormRegisterBuildingComponent>
      <Form onSubmit={handleSubmit(registerBuildingFunction)}>
        <h2>Cadastro Edifício</h2>
        <FormGroup>
          <Label>Nome Edifício</Label>
          <input
            className="form-control"
            placeholder="Nome do Edifício"
            {...register("name")}
          />
        </FormGroup>

        <FormGroup>
          <Label>Imagem Edifício</Label>
          <input
            className="form-control"
            placeholder="Imagem do Edifício"
            {...register("logo")}
          />
        </FormGroup>

        <FormGroup>
          <Label>Tipo</Label>
          <input
            className="form-control"
            placeholder="Tipo do Edifício"
            {...register("type")}
          />
        </FormGroup>

        <FormGroup>
          <Label>Quantidade de Andares</Label>
          <input
            className="form-control"
            placeholder="Quantidade de Andares"
            {...register("floors")}
          />
        </FormGroup>

        <FormGroup>
          <Label>Apartamentos por Andar</Label>
          <input
            className="form-control"
            placeholder="Apartamentos por andar"
            {...register("apartments_per_floor")}
          />
        </FormGroup>

        <FormGroup>
          <Label>Quantidade Apartamentos disponíveis</Label>
          <input
            className="form-control"
            placeholder="Quantidade Apartamentos disponíveis"
            {...register("apartments_available")}
          />
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
    </FormRegisterBuildingComponent>
  );
};

export { FormRegisterBuilding };
