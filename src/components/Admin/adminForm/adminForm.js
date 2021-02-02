import Axios from "axios";
import React, { useState } from "react";

import { useParams } from "react-router-dom";

import "./adminForm.css";

function AdminForm() {
  const [role, setRole] = useState("");
  const [ctc, setCtc] = useState("");
  const [date, setDate] = useState("");
  const [cgpa, setCgpa] = useState("");

  const { id } = useParams();

  const onSubmitted = async (e) => {
    e.preventDefault();
    const body = {
      role,
      ctc,
      cgpa,
      date,
      company_id: id,
    };
    const token = localStorage.getItem("adminToken");

    const headers = {
      authorization: "Bearer " + token,
    };
    await Axios.post("http://localhost:5000/api/adminform", body, {
      headers,
    }).then((res) => console.log(res));
  };

  return (
    <section className="admin__formdetails">
      <div className="admin__box1">
        <h1 className="admin__heading1">Company Details</h1>
        <div className="admin__details">
          <form name="cmpy">
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              type="text"
              placeholder="Role offered"
              name="role"
              maxLength="30"
              className="admin__input"
            />
            <br />
            <input
              value={ctc}
              onChange={(e) => setCtc(e.target.value)}
              type="text"
              placeholder="CTC offered"
              name="ctc"
              maxlength="10"
              className="admin__input"
            />
            <br />
            <input
              value={cgpa}
              onChange={(e) => setCgpa(e.target.value)}
              type="text"
              placeholder="CGPA req"
              name="cgpa"
              maxlength="4"
              className="admin__input"
            />
            <br />
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              name="date"
              className="admin__input"
            />
            <br />
            <button onClick={onSubmitted} className="adminBtn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminForm;
