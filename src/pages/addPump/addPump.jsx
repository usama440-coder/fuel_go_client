import "./addPump.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { toast } from "react-toastify";

const AddPump = () => {
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let submittedData = {
        pump_id: data?.pump_id,
        pump_company: data?.pump_company,
        pump_location: `POINT(${data?.longitude} ${data?.latitude})`,
        pump_address: data?.pump_address,
        pump_state: data?.pump_state,
        pump_city: data?.pump_city,
        pump_username: data?.pump_username,
        pump_pass: data?.pump_pass,
        email_address: data?.email_address,
        contact_number: data?.contact_number,
      };

      await fetch("http://10.25.52.59:5000/api/v1/addnewpump/addpump", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(submittedData),
      });

      toast.success("Pump Added Successfully");
    } catch (error) {
      toast.error("Operation could be completed");
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <div className="addPumpContainer">
          <Header
            heading="Add Pump"
            desc="Information about your plan and usages"
          />
          <form className="form">
            <label>
              Pump Id
              <input
                type="text"
                name="pump_id"
                value={data?.pump_id || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Pump Company
              <input
                type="text"
                name="pump_company"
                value={data?.pump_company || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Logitude
              <input
                type="text"
                name="longitude"
                value={data?.longitude || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Latitude
              <input
                type="text"
                name="latitude"
                value={data?.latitude || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Address
              <input
                type="text"
                name="pump_address"
                value={data?.pump_address || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              State
              <input
                type="text"
                name="pump_state"
                value={data?.pump_state || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              City
              <input
                type="text"
                name="pump_city"
                value={data?.pump_city || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Username
              <input
                type="text"
                name="pump_username"
                value={data?.pump_username || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Pass
              <input
                type="text"
                name="pump_pass"
                value={data?.pump_pass || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email_address"
                value={data?.email_address || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Contact
              <input
                type="text"
                name="contact_number"
                value={data?.contact_number || ""}
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

export default AddPump;
