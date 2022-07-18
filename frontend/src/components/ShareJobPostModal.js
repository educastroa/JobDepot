import React, { useState, useEffect } from "react";
import { format } from 'date-fns';
import "./Header.css";

import { getUsers, shareJob } from "../api";
import { useAppContext } from "../hooks";

export default function ShareJobPostModal({ employerImgSrc, job, id }) {
  const { user } = useAppContext();
  const [receiver, setReceiver] = useState('');
  const [users, setUsers] = useState([]);
  const [modal, triggerModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    triggerModal(false);
    shareJob({ job, sender: user.id, receiver });
    // const value = e.target.value;
    // setSharedJob(value)
  }

  useEffect(() => {
    getUsers().then(data => {
      const { users: allUsers } = data;
      const currentUsers = (allUsers ?? []).filter(usr => usr.id !== user.id);
      setUsers(currentUsers);
    });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <button
        type="button"
        className="btn btn-primary text-nowrap"
        data-bs-toggle="modal"
        data-bs-target={`#shareJobModal${id}`}
        data-bs-whatever="@mdo"
        onClick={() => triggerModal(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"></path>
        </svg>
        Share
      </button>
      <div show='false' className="modal fade" id={`shareJobModal${id}`} tabIndex="-1" aria-labelledby="shareJobModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New message</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="d-flex align-items-center mb-3">
                <div className="me-4">
                  <img
                    src={employerImgSrc}
                    height="auto"
                    width="64" />
                </div>

                <div className="d-flex flex-wrap align-items-center me-4">
                  <div
                    className="w-100"
                    value={job.employer_name}>
                    <b>Employer: </b>
                    {job.employer_name}
                  </div>
                  <div
                    className="w-100">
                    <b>Job Title: </b>
                    {job.job_title}
                  </div>
                  <div
                    className="w-100">
                    <b>Date posted: </b>
                    {job.job_posted_at_datetime_utc != null
                      ? format(new Date(job.job_posted_at_datetime_utc), 'MM/dd/yyyy - hh:mm aaa')
                      : 'N/A'
                    }
                  </div>
                  <div className="w-100">
                    <a href={job.job_apply_link} target="_blank"><b>Apply Here</b></a>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                <select
                  value={receiver}
                  onChange={event => setReceiver(event.target.value)}
                  className="form-select"
                  aria-label="User to Share"
                >
                  <option value="" disabled required>Select user...</option>
                  {users.length > 0 && users.map(usr => (
                    <option key={usr.id} value={usr.id}>{`${usr.first_name} ${usr.last_name ?? ''}`}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Share Job</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
