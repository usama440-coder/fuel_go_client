import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import AddPump from "./pages/addPump/addPump";
import AddVehicle from "./pages/addVehicle/addVehicle";
import DriverDetails from "./pages/driverDetails/driverDetails";
import VehicleDetails from "./pages/vehicleDetails/vehicleDetails";
import PumpDetails from "./pages/pumpDetails/pumpDetails";
import RequestsDetails from "./pages/requestsDetails/requestsDetails";
import NewDriver from "./pages/newDriver/newDriver";
import RequestDetail from "./pages/requestDetail/requestDetail";
// import NewDriver from "./pages/newDriver/newDriver";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addPump" element={<AddPump />} />
          <Route path="/newDriver" element={<NewDriver />} />
          <Route path="/addVehicle" element={<AddVehicle />} />
          <Route path="/driverDetails" element={<DriverDetails />} />
          <Route path="/pumpDetails" element={<PumpDetails />} />
          <Route path="/vehicleDetails" element={<VehicleDetails />} />
          <Route path="/requestsDetails" element={<RequestsDetails />} />
          <Route path="/requestDetail/:id" element={<RequestDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
