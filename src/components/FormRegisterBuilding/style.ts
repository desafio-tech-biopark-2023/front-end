import styled from "styled-components";

const FormRegisterBuildingComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 25px 0px;
  padding: 10px;
  max-width: 500px;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background-color: var(--grey10);
    padding: 10px;
    gap: 10px;
    width: 100%;
    box-shadow: rgb(0 0 0 / 10%) 0px 3px 15px 0px;
    border-radius: 8px 8px;
    h2 {
      align-self: center;
      color: black;
      text-transform: uppercase;
      font-family: "Roboto", sans-serif;
      font-weight: bold;
    }

    .mb-3 {
      width: 100%;
    }

    button {
      background-color: #273c4e;
    }
  }
`;

export { FormRegisterBuildingComponent };
