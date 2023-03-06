import { Footer } from "../../components/Footer";
import { FormRegisterBuilding } from "../../components/FormRegisterBuilding";
import { Header } from "../../components/Header";
import { RegisterBuildingDiv } from "./style";

const RegisterBuilding = () => {
  return (
    <RegisterBuildingDiv>
      <Header />
      <FormRegisterBuilding />
      <Footer />
    </RegisterBuildingDiv>
  );
};

export { RegisterBuilding };
