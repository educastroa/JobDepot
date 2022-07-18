import React, { useState } from "react";
import axios from "axios";
import "./ResumeBuilder.css";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../hooks";

export default function ResumeBuilder(props) {
  const navigate = useNavigate();

  const { user, setUser } = useAppContext();

  const [full_name, setFullName] = useState("");
  const [contact_information, setContactInfo] = useState("");
  const [skills, setSkills] = useState("");
  const [work_experience, setWorkExperience] = useState("");
  const [education, setEducation] = useState("");

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleContactInformation = (e) => {
    setContactInfo(e.target.value);
  };

  const handleSkills = (e) => {
    setSkills(e.target.value);
  };

  const handleWorkExperience = (e) => {
    setWorkExperience(e.target.value);
  };

  const handleEducation = (e) => {
    setEducation(e.target.value);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    console.log("MOOP", full_name);
    axios
      .post("/api/resume", {
        full_name: full_name,
        contact_information: contact_information,
        skills: skills,
        work_experience: work_experience,
        education: education,
        user: user.id,
      })
      .then((res) => {});
    navigate("/resume/view");
  };

  const resetForm = () => {
    setFullName("");
    setContactInfo("");
    setSkills("");
    setWorkExperience("");
    setEducation("");
  };

  return (
    <form>
      <ul className="flex-outer" >
        <li>
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            id="full-name"
            placeholder="Enter your name here"
            className="form-control"
            value={full_name}
            onChange={handleFullName}
          ></input>
        </li>
        <li>
          <label htmlFor="contact-info">Contact Infomation</label>
          <input
            type="text"
            id="contact-info"
            placeholder="Contact information here"
            className="contact-info-input"
            value={contact_information}
            onChange={handleContactInformation}
          ></input>
        </li>
        <li>
          <label htmlFor="Skills">Skills</label>
          <input
            type="skills"
            id="skills"
            placeholder="Enter your skills here"
            className="skills-input"
            value={skills}
            onChange={handleSkills}
          ></input>
        </li>
        <li>
          <label htmlFor="work-experience">Previous Work Experience</label>
          <input
            type="work-experience"
            id="work-experience"
            placeholder="Enter your previous work experience here"
            className="work-experience-input"
            value={work_experience}
            onChange={handleWorkExperience}
          ></input>
        </li>
        <li>
          <label htmlFor="education">Education</label>
          <textarea
            rows="6"
            id="education"
            placeholder="Enter your education here"
            className="education-input"
            value={education}
            type="text"
            onChange={handleEducation}
          ></textarea>
        </li>
        <li>
          <button className="resume-submit" onClick={handleUpload}>
            Upload
          </button>
          <button className="resume-clear" onClick={resetForm}>
            Clear
          </button>
        </li>
      </ul>
    </form>
  );
}
