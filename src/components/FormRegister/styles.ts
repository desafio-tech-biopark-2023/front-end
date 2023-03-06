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
    margin-top: 20px;
    padding: 30px;
    h2 {
      align-self: center;
      color: black;
      text-transform: uppercase;
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .mb-3 {
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: 100%;

      span {
        color: red;
      }
    }

    .form-switch {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  @media only screen and (min-width: 768px) {
    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      background-color: var(--grey10);
      gap: 10px;
      width: 100%;
      box-shadow: rgb(0 0 0 / 10%) 0px 3px 15px 0px;
      border-radius: 8px 8px;
    }
  }
`;

export { FormRegisterComponent };
