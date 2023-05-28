import "./dashboard.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import StatsBox from "../../components/statsBox/StatsBox";

const Dashboard = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <div className="dashboardContainer">
          <Header
            heading="Dashboard"
            desc="Information About Your Plan and Usages"
          />
          <div className="statsContainer">
            <StatsBox
              heading="Total km Traveled This Month"
              value="10,000 KM"
            />
            <StatsBox
              heading="Total Liters of Fuel Used This Month"
              value="20,00000 Liters"
            />
            <StatsBox heading="Average Km/Liters" value="1.56" />
            <StatsBox heading="Total Vehicles" value="1156" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
