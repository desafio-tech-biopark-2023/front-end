import { BannerHome } from "../../components/BannerHome";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HomeDiv } from "./style";

const Home = () => {
  return (
    <HomeDiv>
      <Header />
      <BannerHome />
      <Footer />
    </HomeDiv>
  );
};

export { Home };
