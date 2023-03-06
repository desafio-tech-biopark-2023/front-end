import { Footer } from "../../components/Footer";
import { FormRegisterApartment } from "../../components/FormRegisterApartment";
import { Header } from "../../components/Header";
import { RegisterApartmentDiv } from "./style";

const RegisterApartment = () => {
  return (
    <RegisterApartmentDiv>
      <Header />
      <FormRegisterApartment />
      <Footer />
    </RegisterApartmentDiv>
  );
};

export { RegisterApartment };
