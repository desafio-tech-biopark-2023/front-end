import { useNavigate } from "react-router-dom";
import { useMainContext } from "../../contexts/mainContext";
import { IApartment, IRent } from "../../interfaces/apartment";
import { IBuilding } from "../../interfaces/building";
import { DivCardApartment } from "./style";

const CardApartment = ({
  available,
  bathrooms,
  dorms,
  floor,
  number,
  private_area,
  suites,
  total_area,
  type,
  vacancies,
  visible,
  building,
  value_rent,
  person,
  buildings,
  id,
}: IApartment) => {
  const navigate = useNavigate();

  return (
    <>
      <DivCardApartment>
        <div>
          <img src={building?.logo} alt="" />
        </div>
        <div className="card-info">
          <h3>Edifício: {building?.name}</h3>
          <div>Disponível:{available}</div>
          {available === "Não" && <div>Alugado por: {person?.name}</div>}
          <div>Valor Mês: R$ {value_rent}, 00</div>

          <div className="info-add">
            <div>
              <br />
              <div>Informações adicionais</div>
              <br />
              <div>Banheiros: {bathrooms}</div>
              <div>Dormitórios: {dorms}</div>
              <div>Andar: {floor}</div>
              <div>Número: {number}</div>
              <div>Aréa privativa: {private_area}</div>
              <div>Área Total: {total_area}</div>
              <div>Tipo de Imóvel: {type}</div>
              <div>Vagas de garagem: {vacancies}</div>
              <div>Visível: {visible}</div>

              <span></span>
            </div>
            <div className="div-button">
              <button
                onClick={(e) => {
                  navigate(`/${e.currentTarget.id}`);
                }}
                id={id}
              >
                Alugar
              </button>
            </div>
          </div>
        </div>
      </DivCardApartment>
    </>
  );
};

export { CardApartment };
