import React, { useEffect, useState } from "react";

import "./Dashboard.css";
import AdminForm from "../adminForm/adminForm";
import { useParams } from "react-router";
import Cards from "../Cards/Cards";

function Dashboard() {
  const [isExisting, setIsExisting] = useState(true);

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
        <div>
          <Cards />
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
