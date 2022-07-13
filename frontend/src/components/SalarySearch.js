import React, { useState, useEffect } from "react";
import { salarySearch } from "../api";


export default function SalarySearch() {

  const [inputs, setInputs] = useState({});
  const [salaryResults, setSalaryResults] = useState([]);


  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };


  const onSearch = () => {
    salarySearch({ job_title: inputs.job_title, location: inputs.location })
      .then(res => {
        setSalaryResults(res.data);
      });
  };

  const handleClear = () => {
    setSalaryResults([]);
  }

  useEffect(() => {
    console.log(salaryResults);
  }, [salaryResults]);


  return (
    <div className="h-100 overflow-hidden">
      <div className="d-flex flex-column h-100">
        <div className="mx-auto w-25">
          <h2 className="text-center py-4">Search Salary</h2>
          <form onSubmit={event => {
            event.preventDefault();
            event.target.reset();
            onSearch();
          }}>
            <div >
              <div>
                <div className="mb-3">
                  <input
                    type="text"
                    id="job_title"
                    className="form-control me-4"
                    placeholder="Enter job title"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    id="location"
                    className="form-control me-4"
                    placeholder="Enter location"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-flex justify-content-between w-100">
                  <button type="button" className="btn btn-danger" onClick={handleClear} >Clear</button>
                  <button type="submit" className="btn btn-success">Search</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          {salaryResults.length > 0 ? (salaryResults.map((salaryResult, i) =>
            <div key={i} className="mx-auto w-100 mt-5 mb-2 overflow-auto" style={{ flex: 1, maxWidth: '1200px' }}>
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center overflow-hidden">
                    <div className="me-4">

                    </div>

                    <div className="d-flex flex-wrap align-items-center overflow-hidden me-4">
                      <div className="w-100">
                        <b>Job Title: </b>
                        {salaryResult.job_title}
                      </div>
                      <div className="w-100">
                        <b>Median Salary: </b>
                        {salaryResult.median_salary}
                      </div>
                      <div className="w-100">
                        <b>Currency: </b>
                        {salaryResult.salary_currency}
                      </div>
                      <div className="w-100">
                        <b>Publisher name: </b>
                        {salaryResult.publisher_name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse" >
                <div className="card card-body">
                  <b>Job description:</b>

                  {/* {job.job_description} */}
                </div>
              </div>
            </div>)
          ) : ""}
        </div>

      </div>
    </div>
  );
}
