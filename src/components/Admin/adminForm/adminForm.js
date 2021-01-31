import React, { useState } from "react";

import "./adminForm.css";

function AdminForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [ctc, setCtc] = useState("");
  const [date, setDate] = useState("");
  const [cgpa, setCgpa] = useState("");

  const onSubmitted = () => {};

  return (
    <section className="admin__formdetails">
      <div className="admin__box1">
        <h1 className="admin__heading1">Company Details</h1>
        <div className="admin__details">
          <form name="cmpy" onSubmit={onSubmitted}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name of the company"
              name="company_name"
              maxLength="30"
              className="admin__input"
            />
            <br />
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
            <button className="adminBtn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminForm;
