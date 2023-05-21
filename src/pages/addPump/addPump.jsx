import "./addPump.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

const AddPump = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <div className="dashboardContainer">
          <Header
            heading="Add Pump"
            desc="Information about your plan and usages"
          />
        </div>
      </div>
    </div>
  );
};

export default AddPump;
