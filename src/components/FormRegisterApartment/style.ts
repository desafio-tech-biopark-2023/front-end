import styled from "styled-components";

const FormRegisterApartmentDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
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

    .form-check {
      display: flex;
      align-items: baseline;

      gap: 10px;
    }

    .mb-3 {
      width: 100%;
    }

    button {
      background-color: #273c4e;
    }
  }
`;

export { FormRegisterApartmentDiv };
