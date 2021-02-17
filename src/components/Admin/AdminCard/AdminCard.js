import React from "react";
import { useHistory } from "react-router";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./AdminCard.css";
import AlarmIcon from "@material-ui/icons/Alarm";
function AdminCard({ schedule }) {
  const history = useHistory();
  const date = new Date(schedule.date_alloted);

  const datenow = new Date();

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
      <div className="adminCard__footer">
        <div className="adminCard__date">{`${date.getDate()}/${date.getMonth()}/${date.getUTCFullYear()}`}</div>
        <div className="adminCard_status">
          {datenow > date ? (
            <div style={{ display: "flex" }}>
              <CheckCircleIcon />
              <span>Completed</span>
            </div>
          ) : (
            <div style={{ display: "flex" }}>
              <AlarmIcon />
              <span>Upcoming</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminCard;
