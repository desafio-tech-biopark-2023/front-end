import styled from "styled-components";

const BannerHomeDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;

  .card {
    width: 100%;

    /* max-height: 400px; */
    background-color: #c0c0c073;

    img {
      height: 500px;
      object-fit: cover;
    }
  }

  /* @media only screen and (min-width: 768px) {
    .card {
      padding: 0px 150px;
    }
  } */
`;

export { BannerHomeDiv };
