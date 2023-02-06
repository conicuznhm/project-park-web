import axios from 'axios';
import { getAccessToken } from '../utils/local-storage';

// axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT_URL;
axios.defaults.baseURL = import.meta.env.VITE_ENDPOINT_URL;

axios.interceptors.request.use(
  config => {
    if (getAccessToken()) {
      config.headers.Authorization = `Bearer ${getAccessToken()}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default axios;
