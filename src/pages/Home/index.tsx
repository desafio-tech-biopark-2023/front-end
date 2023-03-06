import { BannerHome } from "../../components/BannerHome";
import { CardApartment } from "../../components/CardApartment";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useMainContext } from "../../contexts/mainContext";
import { IApartment, IRent } from "../../interfaces/apartment";
import { IBuilding } from "../../interfaces/building";
import { HomeDiv } from "./style";

const Home = () => {
  return (
    <HomeDiv>
      <Header />
      {/* <BannerHome /> */}

      <Footer />
    </HomeDiv>
  );
};

export { Home };
