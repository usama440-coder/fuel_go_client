import "./requestsDetails.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { api_url } from "../../utils/api";

const RequestsDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${api_url}/getall/requests`);
        const data = await res.json();
        setData(data?.rows || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <div className="requestsContainer">
          <Header heading="Requests" desc="Add new driver" />
          <table className="table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Req. Quantity</th>
                <th>Fuel Type</th>
                <th>Response</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => {
                return (
                  <tr key={item?.request_id}>
                    <td>{item?.request_time}</td>
                    <td>{item?.requested_quantity}</td>
                    <td>{item?.request_fuel_type}</td>
                    <td>
                      {item?.request_response === null ? (
                        <span>Pending</span>
                      ) : (
                        <span>{item?.request_response}</span>
                      )}
                    </td>
                    <td>
                      <Link
                        to={`/requestDetail/${item?.request_id}`}
                        state={{ item }}
                      >
                        <FaEye />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RequestsDetails;
