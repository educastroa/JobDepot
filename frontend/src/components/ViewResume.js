import React, { useState, useEffect } from "react";
import "./ViewResume.css";
import { getResume } from "../api";

export default function ViewResume() {
  const [resume, setResume] = useState([]);

  const fetchResume = () => {
    getResume()
      .then((data) => {
        setResume(data);
      })
      .catch((err) => console.log("Error found here:", err));
  };

  useEffect(() => {
    fetchResume();
  }, []);

  return (
    <form>
      <ul className="flex-outer">
        <li>
          {resume.map((resumeinfo) => (
            <li key={resumeinfo.id}>
              <li>
                <label htmlFor="full-name">Full Name</label>
                <h4>{resumeinfo.full_name}</h4>
              </li>
              <li>
                <label htmlFor="full-name">Contact Information</label>
                <h4>{resumeinfo.contact_information}</h4>
              </li>
              <li>
                <label htmlFor="full-name">Work Experience</label>
                <h4>{resumeinfo.work_experience}</h4>
              </li>
              <li>
                <label htmlFor="full-name">Education</label>
                <h4>{resumeinfo.education}</h4>
              </li>
              <li>
                <label htmlFor="full-name">Skills</label>
                <h4>{resumeinfo.skills}</h4>
              </li>
            </li>
          ))}
        </li>
      </ul>
    </form>
  );
}
