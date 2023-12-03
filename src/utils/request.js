import axios from "axios";
import getUserToken from "./userToken";
// import { formatAxiosError } from './error-handler';

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // url = base url + request url
  // timeout: 5000 // request timeout
});

/// request interceptor do something before request is sent
service.interceptors.request.use(
  (config) => {
    // const userData = JSON.parse(localStorage.getItem("userDatas"));
    config.headers = {
      // 'content-type': 'application/json',
      // 'Access-Control-Allow-Origin': "*",
      Authorization: getUserToken() ? "Token " + getUserToken() : null,
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
      window.location.href = `/login`;
      return error?.response;
    } else {
      return error?.response;
    }
    //   const formattedError = formatAxiosError(error.response.data);
    return Promise.reject(error);
  }
);

export default service;
