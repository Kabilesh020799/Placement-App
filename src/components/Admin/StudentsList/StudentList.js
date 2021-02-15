import Axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./StudentList.css";

function StudentList() {
  const location = useLocation();
  const cgpa = location.state.cgpa;
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      const token = localStorage.getItem("adminToken");
      const headers = {
        authorization: "Bearer " + token,
      };
      const studs = await Axios.get(
        `http://localhost:5000/api/admin/student/${cgpa}`,
        { headers }
      );
      setStudents([...studs.data]);
    };
    getStudents();
  }, []);
  return (
    <div className="studentList">
      <div
        className="studentList__list"
        style={{
          borderBottom: "1px solid black",
          marginTop: "30px",
          fontWeight: "bolder",
          fontSize: "25px",
        }}
      >
        <div>Regnumber</div>
        <div>Name</div>
        <div>Email</div>
        <div>Department</div>
        <div>Cgpa</div>
      </div>
      {students.map((student) => (
        <div className="studentList__list">
          <div>{student.regnumber}</div>
          <div>{student.name}</div>
          <div>{student.email}</div>
          <div>{student.dept_name}</div>
          <div>{cgpa}</div>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
