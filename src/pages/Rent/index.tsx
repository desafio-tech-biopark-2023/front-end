import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Label } from "reactstrap";
import { CardApartment } from "../../components/CardApartment";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useMainContext } from "../../contexts/mainContext";
import { IApartment, IRent } from "../../interfaces/apartment";
import api from "../../services/api";
import { schemaRent } from "../../validators/schema";
import { RentDiv } from "./style";

const Rent = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm<IRent>({
    resolver: yupResolver(schemaRent),
  });

  console.log(id);
  const { listApartments } = useMainContext();

  const apartmentToRent = listApartments.find(
    (apartment: IApartment) => apartment.id === id
  );

  const rentApartmentFunction = (data: IRent) => {
    console.log(data);

    const dateACtual = () => {
      const data = new Date();
      const dia = String(data.getDate()).padStart(2, "0");
      const mes = String(data.getMonth() + 1).padStart(2, "0");
      const ano = data.getFullYear();
      const dataFormated = ano + "/" + mes + "/" + dia;
      return dataFormated;
    };

    const newRent = {
      date_start_rent: dateACtual(),
      date_end_rent: data.date_end_rent,
    };

    // const timesRent = {};

    const token = localStorage.getItem("@TOKEN");

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    api
      .post(`/rents/${apartmentToRent?.id}`, newRent)
      .then((response: AxiosResponse) => {
        toast.success("Login realizado com sucesso", {
          onClose: () => navigate("/buildings"),
        });
      });
  };

  return (
    <RentDiv>
      <Header />
      {apartmentToRent && (
        <CardApartment
          buildings={apartmentToRent.buildings}
          available={apartmentToRent.available}
          bathrooms={apartmentToRent.bathrooms}
          dorms={apartmentToRent.dorms}
          floor={apartmentToRent.floor}
          number={apartmentToRent.number}
          private_area={apartmentToRent.private_area}
          suites={apartmentToRent.suites}
          total_area={apartmentToRent.total_area}
          type={apartmentToRent.type}
          vacancies={apartmentToRent.vacancies}
          value_rent={apartmentToRent.value_rent}
          visible={apartmentToRent.visible}
          building={apartmentToRent.building}
          person={apartmentToRent.person}
          id={apartmentToRent.id}
        />
      )}
      <Form onSubmit={handleSubmit(rentApartmentFunction)}>
        <FormGroup>
          <Label htmlFor="">Qual a data final do contrato?</Label>
          <input type="date" {...register("date_end_rent")} />
        </FormGroup>

        <Button type="submit">Confirmar Aluguel</Button>
      </Form>
      <Footer />
    </RentDiv>
  );
};

export { Rent };
