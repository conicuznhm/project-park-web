import axios from '../config/axios';

export const signUp = input => axios.post('/auth/signup', input);
