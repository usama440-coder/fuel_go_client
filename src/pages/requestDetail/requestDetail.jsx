import "./requestDetail.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { api_url } from "../../utils/api";
import { toast } from "react-toastify";

const RequestDetail = () => {
  const location = useLocation();
  const [status, setStatus] = useState("Pending");
  const [quantity, setQuantity] = useState("");

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        `${api_url}/req//request-responce/${location?.state?.item?.request_id}`,
        {
          method: "PUT",
          mode: "cors",
          cache: "no-cache",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            request_response: status,
            approved_quantity: quantity,
            response_time: new Date(),
          }),
        }
      );

      toast.success("Request Updated Successfully");
    } catch (error) {
      toast.error("Operation could not be completed");
    }
  };

  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <div className="requestsContainer">
          <Header heading="Request" desc="Add new driver" />
          <table className="table">
            <tbody>
              <tr>
                <td>RequestId</td>
                <td>{location?.state?.item?.request_id}</td>
              </tr>
              <tr>
                <td>Drive Id</td>
                <td>{location?.state?.item?.driver_id}</td>
              </tr>
              <tr>
                <td>Vehicle Id</td>
                <td>{location?.state?.item?.vehicle_id}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{location?.state?.item?.description}</td>
              </tr>
              <tr>
                <td>Request Time</td>
                <td>{location?.state?.item?.request_time}</td>
              </tr>
              <tr>
                <td>Fuel Type</td>
                <td>{location?.state?.item?.request_fuel_type}</td>
              </tr>
              <tr>
                <td>Requested Quantity</td>
                <td>{location?.state?.item?.requested_quantity}</td>
              </tr>
              <tr>
                <td>Response</td>
                <td>
                  <select
                    name="status"
                    id="status"
                    defaultValue={status}
                    onChange={handleStatus}
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Approved Quantity</td>
                <td>
                  <input
                    disabled={status !== "approved"}
                    type="number"
                    name="quantity"
                    value={quantity || ""}
                    onChange={handleQuantity}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="formBtn" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestDetail;
