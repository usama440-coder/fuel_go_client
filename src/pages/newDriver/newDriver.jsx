import "./newDriver.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useState } from "react";
import { toast } from "react-toastify";

const NewDriver = () => {
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://10.25.52.59:5000/api/v1/addnewdriver/adddriver", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      toast.success("Driver Added Successfully");
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
        <div className="newDriverContainer">
          <Header heading="New Driver" desc="Add new driver" />
          <form className="form">
            <label>
              Driver Id
              <input
                type="text"
                name="driver_id"
                value={data?.driver_id || ""}
                onChange={handleChange}
              />
            </label>
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
              Driver Name
              <input
                type="text"
                name="driver_name"
                value={data?.driver_name || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              License Number
              <input
                type="text"
                name="license_number"
                value={data?.license_number || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              DOB
              <input
                type="date"
                name="dob"
                value={data?.dob || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Address
              <input
                type="text"
                name="address"
                value={data?.address || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Pass
              <input
                type="text"
                name="pass"
                value={data?.pass || ""}
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
            <label>
              Email
              <input
                type="email"
                name="email"
                value={data?.email || ""}
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

export default NewDriver;
