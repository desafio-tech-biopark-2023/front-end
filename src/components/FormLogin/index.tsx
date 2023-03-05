import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { ILogin } from "../../interfaces/person";
import { schemaLogin } from "../../validators/schema";
import { FormComponent } from "./style";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm<ILogin>({ resolver: yupResolver(schemaLogin) });

  const login = (data: ILogin) => {
    console.log(data);
  };

  return (
    <FormComponent>
      <Form onSubmit={handleSubmit(login)}>
        <h2>Login</h2>
        <FormGroup>
          <Label>Email</Label>
          <input
            className="form-control"
            placeholder="Digite o email"
            {...register("email")}
          />
        </FormGroup>
        <FormGroup>
          <Label>Senha</Label>
          <input
            className="form-control"
            placeholder="Digite sua senha"
            {...register("password")}
          />
        </FormGroup>

        <Button type="submit">Enviar</Button>
      </Form>
    </FormComponent>
  );
};

export { FormLogin };
