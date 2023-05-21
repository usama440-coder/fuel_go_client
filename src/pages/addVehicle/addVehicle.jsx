import "./addVehicle.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

const AddVehicle = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <div className="dashboardContainer">
          <Header
            heading="Add Vehicle"
            desc="Information about your plan and usages"
          />
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
