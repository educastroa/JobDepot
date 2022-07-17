import axios from 'axios';

export const deleteJob = (payload) => axios.delete(`/api/jobs/saved/${payload.job_id}`).then(res => res);

export const login = (payload) => axios.post('/api/users/login', payload).then(res => res);

export const logout = () => axios.get('/api/users/logout').then(res => res);

export const getMessages = () => axios.get('/api/messages').then(res => res.data);

export const getUser = () => axios.get('/api/users/me').then(res => res.data);

export const getUsers = () => axios.get('/api/users').then(res => res.data);

export const saveJob = (payload) => axios.post("/api/jobs/saved", payload).then(res => res);

export const shareJob = (payload) => axios.post('/api/jobs/shared', payload).then(res => res);

export const jobSearch = ({
    employmentTypes,
    numPages = 2,
    page = 1,
    query,
    radius,
    remoteJobsOnly = false,
    date_posted = "month",
}) => {
    const baseUrl = 'https://google-jobs-search.p.rapidapi.com/search';
    const currentEmploymentTypes = ['', 'ALL'].includes(employmentTypes) ? false : employmentTypes;
    const currentRadius = parseInt(radius, 10) <= 0 ? false : parseInt(radius, 10);
    const options = {
        params: {
            ...(currentEmploymentTypes && { employment_types: currentEmploymentTypes }),
            num_pages: numPages,
            page,
            query,
            ...(currentRadius && { radius: currentRadius }),
            remote_jobs_only: remoteJobsOnly,
            date_posted,
        },
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': '9b4878deadmshab8f24e28e4474cp1d3286jsn25bd1555dd6d',
            'X-RapidAPI-Host': 'google-jobs-search.p.rapidapi.com'
        }
    };

    return axios.get(baseUrl, options)
        .then(res => {
            return res.data
        })
        .catch(error => {
            console.error(error);
        });
}

export const salarySearch = ({
  job_title,
  location,
}) => {
    const baseUrl = 'https://google-jobs-search.p.rapidapi.com/typical-salary';
    const options = {
        params: {
          job_title,
          location,
        },
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': '9b4878deadmshab8f24e28e4474cp1d3286jsn25bd1555dd6d',
            'X-RapidAPI-Host': 'google-jobs-search.p.rapidapi.com'
        }
    };

    return axios.get(baseUrl, options)
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.error(error);
        });
}
