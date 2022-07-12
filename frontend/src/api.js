import axios from 'axios';

export const login = (credentials) => axios.post('/api/users/login', credentials);

export const getUser = () => axios.get('/api/users/me')

export const sessionLogout = () => axios.post('/api/users/logout');

export const jobSearch = ({
    employmentTypes,
    numPage = 1,
    page = 1,
    query,
    radius,
    remoteJobsOnly = false,
}) => {
    const baseUrl = 'https://google-jobs-search.p.rapidapi.com/search';
    const currentEmploymentTypes = ['', 'ALL'].includes(employmentTypes) ? false : employmentTypes;
    const currentRadius = parseInt(radius, 10) <= 0 ? false : parseInt(radius, 10);
    const options = {
        params: {
            ...(currentEmploymentTypes && { employment_types: currentEmploymentTypes }),
            num_page: numPage,
            page,
            query,
            ...(currentRadius && { radius: currentRadius }),
            remote_jobs_only: remoteJobsOnly,
        },
        headers: {
            'X-RapidAPI-Key': '9b4878deadmshab8f24e28e4474cp1d3286jsn25bd1555dd6d',
            'X-RapidAPI-Host': 'google-jobs-search.p.rapidapi.com'
        }
    };

    return axios.get(baseUrl, options)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}


