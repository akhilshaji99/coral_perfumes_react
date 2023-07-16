import axios from "axios";
// import { formatAxiosError } from './error-handler';
const service = axios.create({
    baseURL: process.env.REACT_APP_API_URL // url = base url + request url
    // timeout: 5000 // request timeout
});

/// request interceptor do something before request is sent
service.interceptors.request.use(
    (config) => {
      const userData = JSON.parse(localStorage.getItem('userDatas'));
      config.headers = {
        'content-type': 'application/json',
        // 'Access-Control-Allow-Origin': "*",
        // Accept: 'application/json',
        Authorization: userData ? 'Bearer ' + userData?.token : null
      };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  // interceptor response
  service.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        window.location.href = `/session-expired`;
      }
    //   const formattedError = formatAxiosError(error.response.data);
      return Promise.reject(error);
    }
  );
  
  export default service;