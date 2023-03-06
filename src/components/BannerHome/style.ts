import styled from "styled-components";

const BannerHomeDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;

  .card {
    width: 100%;
    background-color: #c0c0c073;

    img {
      height: 500px;
      object-fit: cover;
    }
  }
`;

export { BannerHomeDiv };
