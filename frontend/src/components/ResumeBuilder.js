import React from "react";
import "./ResumeBuilder.css";

export default function ResumeBuilder() {
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // const [author, setAuthor] = useState("Burlington");

  return (
    <form>
      <ul class="flex-outer">
        <li>
          <label for="full-name">Full Name</label>
          <input
            type="text"
            id="full-name"
            placeholder="Enter your name here"
          ></input>
        </li>
        <li>
          <label for="contact-info">Contact infomation</label>
          <input
            type="text"
            id="contact-info"
            placeholder="Contact information here"
          ></input>
        </li>
        <li>
          <label for="Skills">Skills</label>
          <input
            type="skills"
            id="skills"
            placeholder="Enter your skills here"
          ></input>
        </li>
        <li>
          <label for="work-experience">Previous Work Experience</label>
          <input
            type="work-experience"
            id="work-experience"
            placeholder="Enter your previous work experience here"
          ></input>
        </li>
        <li>
          <label for="education">Education</label>
          <textarea
            rows="6"
            id="education"
            placeholder="Enter your education here"
          ></textarea>
        </li>
        <li>
          <button type="upload">Upload Resume</button>
        </li>
      </ul>
    </form>
  );
}
