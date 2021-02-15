import React, { useEffect, useState } from "react";

import "./Dashboard.css";
import AdminForm from "../adminForm/adminForm";
import Axios from "axios";
import { useParams } from "react-router";
import AdminCard from "../AdminCard/AdminCard";

function Dashboard() {
  const [isExisting, setIsExisting] = useState(true);
  const { id } = useParams();
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const getSchedules = async () => {
      const token = localStorage.getItem("adminToken");
      const headers = {
        authorization: "Bearer " + token,
      };
      const schedule = await Axios.get(
        `http://localhost:5000/api/admin/${id}`,
        {
          headers,
        }
      );
      console.log(schedule);
      schedule.data && setSchedules([...schedule.data]);
    };
    getSchedules();
  }, []);

  return (
    <div className="adminDashboard">
      <div className="adminDashboard__sider">
        <div
          className="adminDashboard__siderItem"
          onClick={() => setIsExisting(true)}
          style={
            isExisting
              ? { background: "#1890FF", marginTop: "50px" }
              : { marginTop: "50px" }
          }
        >
          Schedules
        </div>
        <div
          className="adminDashboard__siderItem"
          onClick={() => setIsExisting(false)}
          style={!isExisting ? { background: "#1890FF" } : null}
        >
          New Schedule
        </div>
      </div>
      {isExisting ? (
        <div className="adminDashboard__main">
          {schedules.map((sch) => (
            <AdminCard key={sch.id} schedule={sch} />
          ))}
        </div>
      ) : (
        <div
          style={{
            margin: "auto",
          }}
        >
          <AdminForm />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
