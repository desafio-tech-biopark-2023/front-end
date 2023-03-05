import styled from "styled-components";

const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.55);
`;

const NavbarDesktop = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;

  .navbar {
    width: 100%;
    display: flex;
    align-items: center;

    .container-fluid {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .navbar-brand {
        display: flex;
        align-items: center;
        gap: 10px;
        color: black;
        text-transform: uppercase;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
      }

      .navbar-nav {
        display: flex;
        flex-direction: row;
        gap: 10px;

        .nav-link {
          font-family: "Roboto", sans-serif;
          color: black;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const NavbarMobile = styled.div`
  width: 100%;

  .navbar {
    width: 100%;

    .container-fluid {
      .navbar-brand {
        display: flex;
        align-items: center;
        gap: 10px;
        color: black;
        text-transform: uppercase;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
      }
    }
  }

  .logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export { HeaderComponent, NavbarDesktop, NavbarMobile };
