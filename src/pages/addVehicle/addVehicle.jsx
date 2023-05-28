import "./addVehicle.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { toast } from "react-toastify";

const AddVehicle = () => {
  const [data, setData] = useState({ fuel_type: "Gasoline" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://10.25.52.59:5000/api/v1/addnewvehicle/addvehicle", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      toast.success("Vehicle Added Successfully");
    } catch (error) {
      toast.error("Operation could not be completed");
    }
  };

  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <div className="addVehicleContainer">
          <Header
            heading="Add Vehicle"
            desc="Information about your plan and usages"
          />
          <form className="form">
            <label>
              Vehicle Id
              <input
                type="text"
                name="vehicle_id"
                value={data?.vehicle_id || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Vehicle Company
              <input
                type="text"
                name="vehicle_company"
                value={data?.vehicle_company || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Modal
              <input
                type="text"
                name="vehicle_modal"
                value={data?.vehicle_modal || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Color
              <input
                type="text"
                name="vehicle_color"
                value={data?.vehicle_color || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Fuel Quota
              <input
                type="text"
                name="fuel_quota"
                value={data?.fuel_quota || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Fuel Type
              <select
                name="fuel_type"
                id="fuel_type"
                value={data?.fuel_type || "Gasoline"}
                onChange={handleChange}
              >
                <option value="Gasoline">Gasoline</option>
                <option value="Diesel">Diesel</option>
              </select>
            </label>
            <label>
              Fuel Capacity
              <input
                type="text"
                name="fuel_capacity"
                value={data?.fuel_capacity || ""}
                onChange={handleChange}
              />
            </label>
          </form>
          <button className="formBtn" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
