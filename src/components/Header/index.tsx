import { HeaderComponent, NavbarDesktop, NavbarMobile } from "./styles";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useState } from "react";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <HeaderComponent>
        <NavbarDesktop>
          <Navbar>
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

            <Nav navbar>
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/buildings">Imóveis</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/building">Cadastro Edifício</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/apartment">Cadastro Apartamento</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/register">Cadastro</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </NavbarDesktop>
        <NavbarMobile>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="me-auto">
              <img src="/src/assets/logo.png" className="logo" />
              BioSystem
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="me-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/home">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/buildings">Imóveis</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/building">Cadastro Edifício</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/apartment">Cadastro</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </NavbarMobile>
      </HeaderComponent>
    </>
  );
};

export { Header };
