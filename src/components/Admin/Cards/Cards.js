import React, { useEffect, useState } from "react";
import AdminCard from "../AdminCard/AdminCard";
import Axios from "axios";
import { useParams } from "react-router";

import "./Cards.css";

function Cards() {
  const [schedules, setSchedules] = useState([]);
  const { id } = useParams();

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
    <div className="cards">
      <div className="adminDashboard__main">
        {schedules.map((sch) => (
          <AdminCard key={sch.id} schedule={sch} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
