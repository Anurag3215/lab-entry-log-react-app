import axios from "axios";
import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";

const ViewLog = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:9000/view-Lab")
      .then((response) => {
        console.log(response.data);
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <NavigationBar/>
        <div className="col-12">
          <h3 className="text-center mb-4">View Log Details</h3>

          <table className="table table-bordered table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Department</th>
                <th>Semester</th>
                <th>Course</th>
                <th>System No</th>
                <th>Login Time</th>
                <th>Logout Time</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {data.length > 0 ? (
                data.map((value, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value.name}</td>
                    <td>{value.dept}</td>
                    <td>{value.sem}</td>
                    <td>{value.course}</td>
                    <td>{value.systemNo}</td>
                    <td>{value.logintime}</td>
                    <td>{value.logoutTime}</td>
                    <td>{value.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="text-center">
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewLog;