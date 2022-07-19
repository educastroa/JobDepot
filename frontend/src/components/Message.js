import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import noImage from './img/no-image.png';
import { useAppContext } from '../hooks';
import { getMessages } from "../api";
import { getUsers } from "../api";

export default function Message({ message, id, users }) {
  const [src, setSrc] = useState('');

  const [sender, setSender] = useState()

  const handleError = () => {
    setSrc(noImage);
  };

  const findSender = (usersArray, userId) => {
    usersArray.forEach(user => {
      if(user.id === userId)
      setSender(`${user.first_name} ${user.last_name}`)

    });
  }

  useEffect(() => {
    setSrc(message.image ?? noImage)
    findSender(users, message.sender_id)
  }, []);




  return (
    <div className="mx-auto mt-4" style={{ maxWidth: '800px' }}>
      <div className="my-3">
      <div className="w-250">
        <h6 className="text-start ">Message from: {`${sender}`} </h6>
      </div>
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

                <div className="w-100">
                  <b>Employer: </b>
                  {message.employer}
                </div>
                <div className="w-100">
                  <b>Job Title: </b>
                  {message.job_title}
                </div>
                <div className="w-100">
                  <a href={message.job_url} target="_blank"><b>Apply Here</b></a>
                </div>
                <div className="w-100">
                  {/* <a href={job.job_apply_link} target="_blank"><b>Apply Here</b></a> */}
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-light text-nowrap"
              data-bs-toggle="collapse"
              data-bs-target={`#message-${id}`}
              aria-expanded="false"
              aria-controls={`message-${id}`}
            >
              See More...
            </button>
          </div>
        </div>
        <div className="collapse" id={`message-${id}`}>
          <div className="card card-body">
            <b>Job description:</b>

            {message.description}
          </div>
        </div>
      </div>
    </div>
  );
}

