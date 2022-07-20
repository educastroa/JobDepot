import React, { useState, useEffect, Fragment } from "react";
import "./SavedJobs.css";
import { format } from "date-fns";
import { getSavedJobs, removeSavedJobs } from "../api";

export default function SavedJobsList({ fetchSavedJobs, savedjob, id }) {

  const deleteSavedJobs = (jobid) => {
    removeSavedJobs(jobid).then(() => {});
    fetchSavedJobs()
  };

  return (
    <Fragment>
      <div className="my-3">
        <div className="card">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center overflow-hidden">
              <div className="d-flex flex-wrap align-items-center overflow-hidden me-4">
                <div className="w-100">
                  <b>Employer: </b>
                  {savedjob.employer_name}
                </div>
                <div className="w-100">
                  <b>Job Title: </b>
                  {savedjob.job_title}
                </div>
                <div className="w-100">
                  <b>Date posted: </b>
                  {savedjob.job_posted_at_datetime_utc != null
                    ? format(
                        new Date(savedjob.job_posted_at_datetime_utc),
                        "MM/dd/yyyy - hh:mm aaa"
                      )
                    : "N/A"}
                </div>
                <div className="w-100">
                  <a href={savedjob.job_apply_link} target="_blank">
                    <b>Apply Here</b>
                  </a>
                </div>
              </div>
            </div>
            <div className="buttons2">
              <button
                type="button"
                className="btn btn-light text-nowrap"
                data-bs-toggle="collapse"
                data-bs-target={`#jobs-${savedjob.id}`}
                aria-expanded="false"
                aria-controls={`jobs-${savedjob.id}`}
              >
                See More...
              </button>
              <div className="space"></div>
              <div className="space"></div>
              <div className="space"></div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => deleteSavedJobs(savedjob.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="collapse" id={`jobs-${savedjob.id}`}>
          <div className="card card-body">
            <b>Job description:</b>

            {savedjob.job_description}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
