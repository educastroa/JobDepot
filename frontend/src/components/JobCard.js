import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppContext } from '../hooks';

import noImage from './img/no-image.png';


export default function JobCard() {
  const { jobs } = useAppContext();

  return (
    <InfiniteScroll
        dataLength={500}
        // next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
      {jobs.map((job, i) => (
        <div key={i} className="my-3">
          <div className="card">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center overflow-hidden">
                <div className="me-4">
                  <img src={job.employer_logo ?? noImage} height="auto" width="64" />
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
                    <a href={job.job_apply_link} target="_blank"><b>Apply Here</b></a>
                  </div>
                </div>
              </div>

              <button 
                type="button"
                className="btn btn-light text-nowrap"
                data-bs-toggle="collapse"
                data-bs-target={`#jobs-${i}`}
                aria-expanded="false"
                aria-controls={`jobs-${i}`}
                >
                  See More...
                </button>
            </div>
          </div>
          <div className="collapse" id={`jobs-${i}`}>
            <div className="card card-body">
              {job.job_description}
            </div>
          </div>
        </div>
      ))}
    </InfiniteScroll>
  );
}





