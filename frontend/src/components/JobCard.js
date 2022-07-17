import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import noImage from "./img/no-image.png";
import axios from "axios";
import { useAppContext } from "../hooks";
import ShareJobPostModal from "./ShareJobPostModal";

export default function JobCard({ job, id }) {
  const [src, setSrc] = useState('');
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
    console.log("UNIQUE RUPE", job.job_id);
    axios
      .post("/api/jobs/saved", {
        employer_name: job.employer_name,
        job_title: job.job_title,
        job_posted_at_datetime_utc: job.job_posted_at_datetime_utc,
        job_apply_link: job.job_apply_link,
        job_description: job.job_description,
        unique_job_id: job.job_id,
        user: user.id,
      })
      .then((res) => {});
    setSavedJob(true);
  };

  console.log("meow", id);
  console.log("woof", job.job_id);

  const removeSavedJob = (e) => {
    e.preventDefault();

    console.log("ploop", job.job_id);

    axios.post("/api/jobs/delete/" + job.job_id).then(() => {
      console.log("is it hitting this moo");
    });
    setSavedJob(false);
  };

  return (
    <div className="my-3">
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center overflow-hidden">
            <div className="me-4">

              <img
                src={src}
                onError={handleError}
                height="auto"
                width="64" />

            </div>

            <div className="d-flex flex-wrap align-items-center overflow-hidden me-4">
              <div className="w-100"
              value={job.employer_name}>
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


          <div className="d-flex align-content-end me-4">
            <div>
              <button
                type="button"
                className="btn btn-light text-nowrap me-2"
                data-bs-toggle="collapse"
                data-bs-target={`#jobs-${id}`}
                aria-expanded="false"
                aria-controls={`jobs-${id}`}
              >
                See More...
              </button>
            </div>
            <ShareJobPostModal id={id} job={job} employerImgSrc={src}/>
          </div>
        </div>
      </div>
      <div className="collapse" id={`jobs-${id}`}>
        <div className="card card-body">
          <b>Job description:</b>

          {job.job_description}

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
