import styled from "styled-components";

const DivCardApartment = styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 15px 0px;
  cursor: pointer;

  .card-info {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
    padding: 10px;
    gap: 5px;

    h3 {
      text-align: center;
      color: black;
      text-transform: uppercase;
      font-family: "Roboto", sans-serif;
      font-weight: bold;
    }

    .info-add {
      display: flex;
      align-items: end;
      justify-content: space-between;

      .div-button {
        margin: 0px 20px 10px 0px;

        button: {
          border: none;
        }

        button:hover {
          background-color: gray;
          border: none;
        }
      }
    }
  }

  :hover {
    box-shadow: rgb(0 0 0 / 30%) 0px 3px 15px 0px;
  }
`;

export { DivCardApartment };
