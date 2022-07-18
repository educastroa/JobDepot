import React, { useState } from "react";
import axios from "axios";
import "./ResumeBuilder.css";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../hooks";

import noImage from "./img/no-image.png";

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

  const test = () => {
    console.log("hello test");
  };

  return (
    <form>
      <ul className="flex-outer1">
        <li>
          <label for="full-name">Full Name</label>
          <input
            type="text"
            id="full-name"
            placeholder="Enter your name here"
            className="full-name-input"
            value={full_name}
            onChange={handleFullName}
          ></input>
        </li>
        <li>
          <label for="contact-info">Contact Information</label>
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
          <label for="Skills">Skills</label>
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
          <label for="work-experience">Previous Work Experience</label>
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
          <label for="education">Education</label>
          <input
            type="education"
            id="education"
            placeholder="Enter your education here"
            className="education-input"
            value={education}
            onChange={handleEducation}
          ></input>
        </li>
        <li>
          <button className="resume-submit" onClick={handleUpload}>
            Upload
          </button>
          <button className="resume-clear" onClick={resetForm}>
            Clear
          </button>
        </li>
        <div className="upload-cv-file">
          <div className="or">
            <h3>or</h3>
          </div>

          <h5>Upload Your CV</h5>
          <form action="/action_page.pdf">
            <input type="file" id="myFile" name="filename"></input>
            <input type="submit" onClick={test}></input>
          </form>
          <embed src={noImage} width="800px" height="800px" />
        </div>
      </ul>
    </form>
  );
}
