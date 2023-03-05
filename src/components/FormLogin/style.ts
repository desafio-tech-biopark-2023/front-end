import styled from "styled-components";

const FormComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
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
      width: 100%;
    }

    button {
      background-color: #273c4e;
    }
  }
`;

export { FormComponent };
