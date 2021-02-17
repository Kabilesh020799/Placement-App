import React, { useEffect, useState } from "react";

import "./Dashboard.css";
import ProfileForm from "../profileForm";
import Axios from "axios";
import { useParams } from "react-router";

function Dashboard() {
  const [isExisting, setIsExisting] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getStudents = async () => {
      const token = localStorage.getItem("secretToken");
      const headers = {
        authorization: "Bearer " + token,
      };
      const students = await Axios.get("http://localhost:5000/api/students", {
        headers,
      });
      console.log(students);
    };
    getStudents();
  });

  return (
    <div className="dashboard">
      <div className="dashboard__sider">
        <div
          className="dashboard__siderItem"
          style={
            isExisting
              ? { background: "#1890FF", marginTop: "50px" }
              : { marginTop: "50px" }
          }
          onClick={() => setIsExisting(true)}
        >
          Events
        </div>
        <div
          className="dashboard__siderItem"
          onClick={() => setIsExisting(false)}
          style={!isExisting ? { background: "#1890FF" } : { marginTop: "0px" }}
        >
          Profile
        </div>
      </div>
      <div>
        {isExisting ? (
          <div></div>
        ) : (
          <div className="dashboard__main">
            <ProfileForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
