import styled from "styled-components";

const FooterComponent = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.55);
  background-color: #273c4e;
  padding: 20px;

  p {
    color: white;
  }

  .navbar-brand {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    margin-right: 0;
    color: white;
    text-transform: uppercase;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
    .navbar-brand {
      display: none;
    }
  }
`;

export { FooterComponent };
