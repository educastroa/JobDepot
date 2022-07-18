import React, { useState } from "react";
import { uploadResume } from "../api";
import "./ResumeBuilder.css";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../hooks";

import noImage from "./img/no-image.png";

export default function ResumeBuilder(props) {
  const navigate = useNavigate();

  const { user, setUser } = useAppContext();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const uploadButton = () => {
    uploadResume({
      full_name: inputs.full_name,
      contact_information: inputs.contact_information,
      skills: inputs.skills,
      work_experience: inputs.work_experience,
      education: inputs.education,
      user: user.id,
    });
    navigate("/resume/view");
  };

  const resetForm = () => {
    setInputs({
      full_name: "",
      contact_information: "",
      skills: "",
      work_experience: "",
      education: "",
    });
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
            type="full_name"
            id="full_name"
            placeholder="Enter your name here"
            className="full-name-input"
            onChange={handleChange}
          ></input>
        </li>
        <li>
          <label for="contact-info">Contact Information</label>
          <input
            type="contact_information"
            id="contact_information"
            placeholder="Contact information here"
            className="contact-info-input"
            onChange={handleChange}
          ></input>
        </li>
        <li>
          <label for="Skills">Skills</label>
          <input
            type="skills"
            id="skills"
            placeholder="Enter your skills here"
            className="skills-input"
            onChange={handleChange}
          ></input>
        </li>
        <li>
          <label for="work-experience">Previous Work Experience</label>
          <input
            type="work_experience"
            id="work_experience"
            placeholder="Enter your previous work experience here"
            className="work-experience-input"
            onChange={handleChange}
          ></input>
        </li>
        <li>
          <label for="education">Education</label>
          <input
            type="education"
            id="education"
            placeholder="Enter your education here"
            className="education-input"
            onChange={handleChange}
          ></input>
        </li>
        <li>
          <button className="btn btn-success" onClick={uploadButton}>
            Upload
          </button>
          <button className="btn btn-danger" onClick={resetForm}>
            Clear
          </button>
        </li>
        <div className="upload-cv-file">
          <div className="or">
            <h3>or</h3>
          </div>

          <h2>Upload Your Resume Here</h2>
          <p class="lead">
            <b></b>
          </p>

          <form id="file-upload-form" class="uploader">
            <input
              id="file-upload"
              type="file"
              name="fileUpload"
              accept="image/*"
            />

            <label for="file-upload" id="file-drag">
              <img id="file-image" src="#" alt="Preview" class="hidden"></img>
              <div id="start">
                <i class="fa fa-download" aria-hidden="true"></i>
                <div>Select a file or drag here</div>
                <div id="notimage" class="hidden">
                  Please select an image
                </div>
                <span id="file-upload-btn" class="btn btn-primary">
                  Select a file
                </span>
              </div>
              <div id="response" class="hidden">
                <div id="messages"></div>
                <progress class="progress" id="file-progress" value="0">
                  <span>0</span>%
                </progress>
              </div>
            </label>
          </form>
          {/* <h5>Upload Your CV</h5>
          <form action="/action_page.pdf">
            <input type="file" id="myFile" name="filename"></input>
            <input type="submit" onClick={test}></input>
          </form> */}
        </div>
      </ul>
    </form>
  );
}
