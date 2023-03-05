import styled from "styled-components";

const FormRegisterComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  padding: 10px;
  max-width: 500px;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    h2 {
      align-self: center;
      color: black;
      text-transform: uppercase;
      font-family: "Roboto", sans-serif;
      font-weight: bold;
    }

    .form-switch {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;

export { FormRegisterComponent };
