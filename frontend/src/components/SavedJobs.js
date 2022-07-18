import axios from "axios";
import React, { useState, useEffect } from "react";
import "./SavedJobs.css";
import { format } from "date-fns";
import InfiniteScroll from "react-infinite-scroll-component";
import { Navigate, useNavigate } from "react-router-dom";

export default function ViewResume({ onFetchData }) {
  const [savedjobs, setSavedJobs] = useState([]);
  const navigate = useNavigate();

  const getSavedJobs = () => {
    axios
      .get("/api/jobs/saved")
      .then((res) => {
      setSavedJobs(res.data);
      })
      .catch((err) => console.log("Error found here:", err));
  };

  useEffect(() => {
    getSavedJobs();
  }, []);

  const removeSavedButton = (jobid) => {

    axios.post("/api/jobs/saved/delete/" + jobid).then(() => {
    });
    window.location.reload();
  };

  return (
    <InfiniteScroll
      dataLength={savedjobs.length}
      next={onFetchData}
      hasMore={savedjobs.length <= 500}
      loader={<h4 className="text-center"></h4>}
      scrollableTarget="scrollableDiv"
    >
      <div className="mx-auto mt-4" style={{ maxWidth: '1200px' }}>
        <ul className="saved-jobs-list">
          {savedjobs.map((savedjobsinfo) => (
            <div className="my-3">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center overflow-hidden">
                    <div className="d-flex flex-wrap align-items-center overflow-hidden me-4">
                      <div className="w-100">
                        <b>Employer: </b>
                        {savedjobsinfo.employer_name}
                      </div>
                      <div className="w-100">
                        <b>Job Title: </b>
                        {savedjobsinfo.job_title}
                      </div>
                      <div className="w-100">
                        <b>Date posted: </b>
                        {savedjobsinfo.job_posted_at_datetime_utc != null
                          ? format(
                              new Date(
                                savedjobsinfo.job_posted_at_datetime_utc
                              ),
                              "MM/dd/yyyy - hh:mm aaa"
                            )
                          : "N/A"}
                      </div>
                      <div className="w-100">
                        <a href={savedjobsinfo.job_apply_link} target="_blank">
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
                      data-bs-target={`#jobs-${savedjobsinfo.id}`}
                      aria-expanded="false"
                      aria-controls={`jobs-${savedjobsinfo.id}`}
                    >
                      See More...
                    </button>
                    <div className="space"></div>
                    <div className="space"></div>
                    <div className="space"></div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => removeSavedButton(savedjobsinfo.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div className="collapse" id={`jobs-${savedjobsinfo.id}`}>
                <div className="card card-body">
                  <b>Job description:</b>

                  {savedjobsinfo.job_description}
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </InfiniteScroll>
  );
}
