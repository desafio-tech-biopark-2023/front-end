import { Footer } from "../../components/Footer";
import { FormLogin } from "../../components/FormLogin";
import { Header } from "../../components/Header";
import { LoginDiv } from "./style";

const Login = () => {
  return (
    <LoginDiv>
      <Header />
      <FormLogin />
      <Footer />
    </LoginDiv>
  );
};

export { Login };
