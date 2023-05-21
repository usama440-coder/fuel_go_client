import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaUser, FaGasPump, FaCar, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="/img/logo.png" width={70} alt="logo_img" />
      <div className="navlinks">
        <NavLink className="navlink" to="/">
          <FaUser className="navLinkIcon" />
          <p className="navLinkDesc">New Driver</p>
        </NavLink>

        <NavLink className="navlink" to="/addPump">
          <FaGasPump className="navLinkIcon" />
          <p className="navLinkDesc">Add Pump</p>
        </NavLink>

        <NavLink className="navlink" to="/addVehicle">
          <FaCar className="navLinkIcon" />
          <p className="navLinkDesc">New Vehicle</p>
        </NavLink>

        <NavLink className="navlink" to="/vehicleDetails">
          <FaCar className="navLinkIcon" />
          <p className="navLinkDesc">Vehicle Details</p>
        </NavLink>

        <NavLink className="navlink" to="/driverDetails">
          <FaUser className="navLinkIcon" />
          <p className="navLinkDesc">Driver Details</p>
        </NavLink>

        <NavLink className="navlink" to="/pumpDetails">
          <FaGasPump className="navLinkIcon" />
          <p className="navLinkDesc">Pump Details</p>
        </NavLink>

        <NavLink className="navlink" to="/logout">
          <FaSignOutAlt className="navLinkIcon" />
          <p className="navLinkDesc">Logout</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
