import { CardApartment } from "../../components/CardApartment";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useMainContext } from "../../contexts/mainContext";
import { IApartment, IRent } from "../../interfaces/apartment";
import { BuildingsPage, ContainerBuilding } from "./style";

const Buildings = () => {
  const { listApartments, listRents } = useMainContext();

  return (
    <BuildingsPage>
      <Header />
      <ContainerBuilding>
        {listApartments.length > 0 ? (
          listApartments.map((apartment: IApartment) => {
            return (
              <CardApartment
                buildings={apartment.buildings}
                available={apartment.available}
                bathrooms={apartment.bathrooms}
                dorms={apartment.dorms}
                floor={apartment.floor}
                number={apartment.number}
                private_area={apartment.private_area}
                suites={apartment.suites}
                total_area={apartment.total_area}
                type={apartment.type}
                vacancies={apartment.vacancies}
                value_rent={apartment.value_rent}
                visible={apartment.visible}
                building={apartment.building}
                person={apartment.person}
              />
            );
          })
        ) : (
          <>
            <div>Não existem apartamentos disponiveis</div>
          </>
        )}
      </ContainerBuilding>
      <Footer />
    </BuildingsPage>
  );
};

export { Buildings };
