import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import AddPump from "./pages/addPump/addPump";
import AddVehicle from "./pages/addVehicle/addVehicle";
import DriverDetails from "./pages/driverDetails/driverDetails";
import VehicleDetails from "./pages/vehicleDetails/vehicleDetails";
import PumpDetails from "./pages/pumpDetails/pumpDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/addPump" element={<AddPump />} />
        </Routes>
        <Routes>
          <Route path="/addVehicle" element={<AddVehicle />} />
        </Routes>
        <Routes>
          <Route path="/driverDetails" element={<DriverDetails />} />
        </Routes>
        <Routes>
          <Route path="/pumpDetails" element={<PumpDetails />} />
        </Routes>
        <Routes>
          <Route path="/vehicleDetails" element={<VehicleDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
