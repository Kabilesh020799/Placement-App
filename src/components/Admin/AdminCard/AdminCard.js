import React from "react";
import { useHistory } from "react-router";

import "./AdminCard.css";

function AdminCard({ schedule }) {
  const history = useHistory();

  const onClicked = (id) => {
    history.push({
      pathname: `${schedule.company_id}/` + id,
      state: { cgpa: schedule.cgpa },
    });
  };
  return (
    <div className="adminCard">
      <div className="adminCard__role">{schedule.role_off}</div>
      <div className="adminCard_second">
        <div className="adminCard__ctc">{schedule.ctc_off} LPA</div>
        <div className="adminCard__ctc">
          {" "}
          {`>=`} {schedule.cgpa}CGPA
        </div>
        <button
          className="adminCard__btn"
          onClick={() => onClicked(schedule.id)}
        >
          {" "}
          Eligible Students
        </button>
      </div>
    </div>
  );
}

export default AdminCard;
