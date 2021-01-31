import React from "react";

import "./adminForm.css";

function AdminForm() {
  return (
    <section class="admin__formdetails">
      <div class="admin__box1">
        <h1 class="admin__heading1">Company Details</h1>
        <div class="admin__details">
          <form name="cmpy" onsubmit="return validate()" method="POST">
            <input
              type="text"
              placeholder="Name of the company"
              name="company_name"
              maxLength="30"
              className="admin__input"
            />
            <br />
            <input
              type="text"
              placeholder="Role offered"
              name="role"
              maxLength="30"
              className="admin__input"
            />
            <br />
            <input
              type="text"
              placeholder="CTC offered"
              name="ctc"
              maxlength="10"
              className="admin__input"
            />
            <br />
            <input
              type="text"
              placeholder="CGPA req"
              name="cgpa"
              maxlength="4"
              className="admin__input"
            />
            <br />
            <input type="date" name="date" className="admin__input" />
            <br />
            <button type="submit"></button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminForm;
