import axios from "axios";
import React, { useState, useEffect } from "react";
import "./ViewResume.css";

export default function ViewResume() {
  const [resume, setResume] = useState([]);

  const getResume = () => {
    axios
      // /api/resume/view
      //https://jsonplaceholder.typicode.com/resume
      .get("/api/resume/view")
      .then((res) => {
        console.log("res data:", res.data);
        setResume(res.data);
      })
      .catch((err) => console.log("Error found here:", err));
  };

  console.log("resume here:", resume);

  useEffect(() => {
    getResume();
  }, []);

  return (
    <div className="resume-view-list">
      <ul className="resume-list">
        {resume.map((resumeinfo) => (
          <li key={resumeinfo.id}>
            <li key={resumeinfo.id}>
              <h3>Full Name: </h3>
              {resumeinfo.full_name}
            </li>
            <li key={resumeinfo.id}>
              <h3>Contact Information: </h3>
              {resumeinfo.contact_information}
            </li>
            <li key={resumeinfo.id}>
              <h3>Education: </h3> {resumeinfo.education}
            </li>
            <li key={resumeinfo.id}>
              <h3>Skills: </h3> {resumeinfo.skills}
            </li>
          </li>
        ))}
      </ul>
    </div>
  );
}
