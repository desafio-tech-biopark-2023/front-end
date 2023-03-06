import { Footer } from "../../components/Footer";
import { FormLogin } from "../../components/FormLogin";
import { Header } from "../../components/Header";
import { LoginDiv } from "./style";
import { ToastContainer } from "react-toastify";

const Login = () => {
  return (
    <LoginDiv>
      <Header />
      <FormLogin />
      <ToastContainer />
      <Footer />
    </LoginDiv>
  );
};

export { Login };
