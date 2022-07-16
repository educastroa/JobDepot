import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import noImage from "./img/no-image.png";
import axios from "axios";
import { useAppContext } from "../hooks";

export default function JobCard({ job, id }) {
  const [src, setSrc] = useState();
  const { user, setUser } = useAppContext();
  const [savedjob, setSavedJob] = useState(false);

  const handleError = () => {
    setSrc(noImage);
  };

  useEffect(() => {
    setSrc(job.employer_logo ?? noImage);
  }, []);

  const addSavedJob = (e) => {
    e.preventDefault();

    axios
      .post("/api/users/saved", {
        employer_name: job.employer_name,
        job_title: job.job_title,
        job_posted_at_datetime_utc: job.job_posted_at_datetime_utc,
        job_apply_link: job.job_apply_link,
        job_description: job.job_description,
        user: user.id,
      })
      .then((res) => {});
    setSavedJob(true);
  };

  const removeSavedJob = (e) => {
    e.preventDefault();
    console.log("xxxxxxxxxxxxxxxxxxxx", id);

    axios.post("/api/users/saved/delete/" + id).then(() => {
      console.log("is it hitting this");
    });
    setSavedJob(false);
  };

  return (
    <div className="my-3">
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center overflow-hidden">
            <div className="me-4">
              <img src={src} onError={handleError} height="auto" width="64" />
            </div>

            <div className="d-flex flex-wrap align-items-center overflow-hidden me-4">
              <div className="w-100">
                <b>Employer: </b>
                {job.employer_name}
              </div>
              <div className="w-100">
                <b>Job Title: </b>
                {job.job_title}
              </div>
              <div className="w-100">
                <b>Date posted: </b>
                {job.job_posted_at_datetime_utc != null
                  ? format(
                      new Date(job.job_posted_at_datetime_utc),
                      "MM/dd/yyyy - hh:mm aaa"
                    )
                  : "N/A"}
              </div>
              <div className="w-100">
                <a href={job.job_apply_link} target="_blank">
                  <b>Apply Here</b>
                </a>
              </div>
            </div>
          </div>

          <div className="button-2">
            <button
              type="button"
              className="btn btn-light text-nowrap"
              data-bs-toggle="collapse"
              data-bs-target={`#jobs-${id}`}
              aria-expanded="false"
              aria-controls={`jobs-${id}`}
            >
              See More...
            </button>

            <button
              type="button"
              className="btn btn-light text-nowrap"
              data-toggle={savedjob}
              aria-pressed="false"
              autocomplete="off"
              onClick={savedjob ? removeSavedJob : addSavedJob}
            >
              {savedjob ? "Job Saved" : "Like"}
            </button>
          </div>
        </div>
        <div className="collapse" id={`jobs-${id}`}>
          <div className="card card-body">
            <b>Job description:</b>

            {job.job_description}
          </div>
        </div>
      </div>
    </div>
  );
}
