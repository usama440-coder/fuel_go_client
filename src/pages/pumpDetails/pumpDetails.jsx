import "./pumpDetails.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

const PumpDetails = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <div className="dashboardContainer">
          <Header
            heading="Pump Details"
            desc="Information about your plan and usages"
          />
        </div>
      </div>
    </div>
  );
};

export default PumpDetails;
