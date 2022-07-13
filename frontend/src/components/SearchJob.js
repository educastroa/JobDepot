import React, { useRef, useState } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import { jobParams, jobSearch } from "../api";
import { useAppContext } from '../hooks';
import JobCard from "./JobCard";

export default function SearchJob() {
  const { jobs, setJobs } = useAppContext();
  const collapsibleRef = useRef();
  const queryInputRef = useRef();
  const remoteCheckboxRef = useRef();
  const employmentTypesSelectRef = useRef();
  const radiusSelectRef = useRef();
  const [search, setSearch] = useState({
      employmentTypes: '',
      query: '',
      radius: '0',
      remoteJobsOnly: false,
  });

  const handleSubmit = (event) => {
    const numPage = 5;
    const page = 1;
    event.preventDefault();

    jobSearch({ ...search, numPage, page })
      .then(res => {
        console.log(res);
        setJobs(res?.data ?? []);
        new bootstrap.Collapse(collapsibleRef.current);
      })
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setSearch(values => ({ ...values, [name]: value }));
  }

  const handleClear = () => {
    employmentTypesSelectRef.current.value = '';
    queryInputRef.current.value = '';
    radiusSelectRef.current.value = '0';
    remoteCheckboxRef.current.checked = false;

    setSearch({
      employmentTypes: '',
      query: '',
      radius: '0',
      remoteJobsOnly: false,
    });
  }

  return (
    <div className="h-100 overflow-hidden">
      <div className="d-flex flex-column h-100">
        <div className="mx-auto w-25">
          <h2 className="text-center py-4">Find Your Next Career Here </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="job-search-query" className="visually-hidden">
                Search job posts
              </label>
              <div className="d-flex">
                <input
                  type="text"
                  id="job-search-query"
                  name="query"
                  ref={queryInputRef}
                  className="form-control me-4" 
                  placeholder="Search job posts"
                  value={search.query}
                  onChange={handleChange}
                  required
                />
                <button 
                  type="button"
                  className="btn btn-primary text-nowrap"
                  data-bs-toggle="collapse"
                  data-bs-target="#advanced-search"
                  aria-expanded="false"
                  aria-controls="advanced-search"
                  >
                    Advanced Search
                </button>
              </div>
            </div>

            <div className="collapse" id="advanced-search" ref={collapsibleRef}>
              <div className="mb-3">
                <label htmlFor="job-search-remote" className="form-check-label me-2">
                  Remote
                </label>
                <input
                  type="checkbox"
                  id="job-search-remote"
                  name="remoteJobsOnly"
                  ref={remoteCheckboxRef}
                  className="form-check-label"
                  checked={search.remoteJobsOnly}
                  onChange={handleChange}
                />
              </div>

              <select
                id="job-search-employmentTypes"
                name="employmentTypes"
                ref={employmentTypesSelectRef}
                className="form-select mb-3"
                aria-label="Employment Type"
                value={search.employmentTypes}
                onChange={handleChange}
              >
                <option value="" disabled>Select Employment Type...</option>
                <option value="FULLTIME">Full-Time</option>
                <option value="PARTTIME">Part-Time</option>
                <option value="CONTRACTOR">Contractor</option>
                <option value="INTERN">Intern</option>
                <option value="ALL">Any</option>
              </select>

              <select
                id="job-search-radius"
                name="radius"
                ref={radiusSelectRef}
                className="form-select mb-3"
                aria-label="Radius"
                value={search.radius}
                onChange={handleChange}
              >
                <option value="0" disabled>Select Search Radius...</option>
                <option value="10">10km</option>
                <option value="25">25km</option>
                <option value="50">50km</option>
                <option value="100">100km</option>
                <option value="-1">Any</option>
              </select>
            </div>

            <div className="d-flex justify-content-between w-100">
              <button type="button" className="btn btn-danger" onClick={handleClear}>Clear</button>
              <button type="submit" className="btn btn-success">Search</button>
            </div>
          </form>
        </div>

        <div className="mx-auto w-100 mt-5 mb-2 overflow-auto" style={{ flex: 1, maxWidth: '1200px' }}>
          {jobs.length > 0 && <JobCard />}
        </div>
      </div>
    </div>
  );
}
