import React, { useState, useEffect } from "react";
import "./SavedJobs.css";
import SavedJobsList from "./SavedJobsList";
import { getSavedJobs, removeSavedJobs } from "../api";

export default function SavedJob({}) {
  const [savedjobs, setSavedJobs] = useState([]);

  const fetchSavedJobs = () => {
    getSavedJobs()
      .then((res) => {
        setSavedJobs(res);
      })
      .catch((err) => console.log("Error found here:", err));
  };

  useEffect(() => {
    fetchSavedJobs();
  }, []);

  return (

    <div className="h-100 overflow-hidden">
      <div className="d-flex flex-column h-100">
        <div className="mx-auto w-25">
          <h2 className="text-center py-4">Your Saved Jobs</h2>
        </div>
        <div className="resume-view-list">
          <div
            id="scrollableDiv"
            className="mx-auto w-100 mt-5 mb-2 overflow-auto"
            style={{ flex: 1, maxWidth: "1200px" }}
          >
            <ul className="saved-jobs-list">
              {savedjobs.map(
                (savedjob, i) =>
                  savedjob != null && (
                    <SavedJobsList key={i} savedjob={savedjob} id={i} />
                  )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
