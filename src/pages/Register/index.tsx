import { Footer } from "../../components/Footer";
import { FormRegister } from "../../components/FormRegister";
import { Header } from "../../components/Header";
import { RegisterDiv } from "./style";

const Register = () => {
  return (
    <RegisterDiv>
      <Header />
      <FormRegister />
      <Footer />
    </RegisterDiv>
  );
};

export { Register };
