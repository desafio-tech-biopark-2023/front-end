import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useSessionContext } from "../../contexts/sessionContext";
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

  const { login } = useSessionContext();

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
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Senha</Label>
          <input
            className="form-control"
            placeholder="Digite sua senha"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
        </FormGroup>

        <Button type="submit">Enviar</Button>
        <div className="cadastrar">
          <span>Ainda não possui conta?</span>
          <a href="/register">Cadastrar</a>
        </div>
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
    </FormComponent>
  );
};

export { FormLogin };
