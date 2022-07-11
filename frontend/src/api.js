import axios from 'axios';

export const login = ( credentials ) => axios.post('/api/users/login', credentials);
export const getUser = () => axios.get('/api/users/me')
export const sessionLogout = () => axios.post('/api/users/logout');

