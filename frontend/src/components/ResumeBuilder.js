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
    }).then(() => {});
    navigate("/resumeView");
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

  return (

    <form className="resumebuildupload">
      <ul className="contact__right">
        <li className="line-item">
          <label htmlFor="full-name" className="contact__form-label">
            Full Name
          </label>
          <input
            type="full_name"
            id="full_name"
            placeholder="Enter your name here"
            className="contact__form-input"
            size="50"
            onChange={handleChange}
          ></input>
        </li>
        <li className="line-item">
          <label htmlFor="contact-info" className="contact__form-label">
            Contact Information
          </label>
          <textarea
            type="contact_information"
            id="contact_information"
            placeholder="Contact information here"
            className="contact__form-textarea"
            size="50"
            onChange={handleChange}
          ></textarea>
        </li>
        <li className="line-item">
          <label htmlFor="Skills" className="contact__form-label">
            Skills
          </label>
          <textarea
            type="skills"
            id="skills"
            rows="6"
            placeholder="Enter your skills here"
            className="contact__form-textarea"
            size="10"
            onChange={handleChange}
          ></textarea>
        </li>
        <li className="line-item">
          <label htmlFor="work-experience" className="contact__form-label">
            Work Experience
          </label>
          <textarea
            type="work_experience"
            id="work_experience"
            placeholder="Enter your previous work experience here"
            className="contact__form-textarea"
            rows="6"
            size="10"
            onChange={handleChange}
          ></textarea>
        </li>
        <li className="line-item">
          <label htmlFor="education" className="contact__form-label">
            Education
          </label>
          <textarea
            type="education"
            id="education"
            className="contact__form-textarea"
            placeholder="Enter your education here"
            rows="6"
            size="10"
            onChange={handleChange}
          ></textarea>
        </li>
        <li className="buttons2">
          <button className="btn btn-success upload" onClick={uploadButton}>
            Upload
          </button>
          <button className="btn btn-danger" onClick={resetForm}>
            Clear
          </button>
        </li>
      </ul>

      <div className="upload-cv-file">
        <p className="lead">
          <b></b>
        </p>

        <form id="file-upload-form" className="uploader">
          <input
            id="file-upload"
            type="file"
            name="fileUpload"
            accept="image/*"
          />

          <label htmlFor="file-upload" id="file-drag">
            <img id="file-image" alt="Preview" className="hidden"></img>
            <div id="start">
              <i className="fa fa-download" aria-hidden="true"></i>
              <div>Select a file or drag here</div>
              <div id="notimage" className="hidden">
                Please select an image
              </div>
              <span id="file-upload-btn" className="btn btn-primary">
                Select a file
              </span>
            </div>
            <div id="response" className="hidden">
              <div id="messages"></div>
              <progress className="progress" id="file-progress" value="0">
                <span>0</span>%
              </progress>
            </div>
          </label>
        </form>
      </div>
    </form>
  );
}
