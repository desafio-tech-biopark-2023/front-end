import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { RegisterBuilding } from "../pages/RegisterBuilding";
import { RegisterApartment } from "../pages/RegisterApartment";
import { Buildings } from "../pages/Buildings";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/building" element={<RegisterBuilding />} />
      <Route path="/apartment" element={<RegisterApartment />} />
      <Route path="/buildings" element={<Buildings />} />
    </Routes>
  );
};

export default RoutesMain;
