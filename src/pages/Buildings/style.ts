import styled from "styled-components";

const BuildingsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ContainerBuilding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-color: var(--grey10);
  padding: 30px;
  gap: 20px;
  width: 500px;
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 15px 0px;
`;

export { BuildingsPage, ContainerBuilding };
