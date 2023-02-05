import axios from '../config/axios';

// export const signUp = input => axios.post('/auth/signup', input);
export const signUp = input => axios.post('http://localhost:8800/auth/signup', input);
