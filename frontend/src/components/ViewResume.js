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
    <form>
      <ul className="flex-outer">
        <li>
          {resume.map((resumeinfo) => (
            <li key={resumeinfo.id}>
              <li>
                <label for="full-name">Full Name</label>
                <h4>{resumeinfo.full_name}</h4>
              </li>
              <li>
                <label for="full-name">Contact Information</label>
                <h4>{resumeinfo.contact_information}</h4>
              </li>
              <li>
                <label for="full-name">Work Experience</label>
                <h4>{resumeinfo.work_experience}</h4>
              </li>
              <li>
                <label for="full-name">Education</label>
                <h4>{resumeinfo.education}</h4>
              </li>
              <li>
                <label for="full-name">Skills</label>
                <h4>{resumeinfo.skills}</h4>
              </li>
            </li>
          ))}
        </li>
      </ul>
    </form>
  );
}
