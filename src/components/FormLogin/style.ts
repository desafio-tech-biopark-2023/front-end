import styled from "styled-components";

const FormComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  /* height: 100%; */
  padding: 10px;
  /* max-width: 500px; */

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background-color: var(--grey10);
    padding: 40px;
    gap: 5px;
    width: 412px;
    box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.75);
    border-radius: 8px 16px;

    h2 {
      /* font-family: var(--heading-font-family); */
      /* font-weight: var(--heading-3-500); */
      font-size: 24px;
      color: #000000;
      margin-bottom: 20px;
    }

    .mb-3 {
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: 100%;
    }

    button {
      background-color: #273c4e;
    }
    .error {
      color: red;
    }

    .cadastrar {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: flex-end;
      gap: 10px;

      a {
        text-decoration: none;
        color: #273c4e;
      }

      a:hover {
        text-decoration: underline;
        color: #000000;
      }
    }
  }
`;

export { FormComponent };
