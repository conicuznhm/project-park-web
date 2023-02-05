import axios from 'axios';

// axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT_URL;
axios.defaults.baseURL = import.meta.env.VITE_ENDPOINT_URL;

export default axios;
