import "./dashboard.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

const Dashboard = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <div className="dashboardContainer">
          <Header
            heading="Dashboard"
            desc="Information about your plan and usages"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
