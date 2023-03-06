import { NavbarBrand } from "reactstrap";
import { FooterComponent } from "./style";

const Footer = () => {
  return (
    <FooterComponent>
      <p>© 2023 - Todos os direitos reservados.</p>
      <NavbarBrand href="/">
        <img
          src="/src/assets/logo.png"
          className="logo"
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
          }}
        />
        BioSystem
      </NavbarBrand>
    </FooterComponent>
  );
};

export { Footer };
