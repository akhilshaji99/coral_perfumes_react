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
    if (response?.data?.meta_data) {
      let metaData = response?.data?.meta_data;
      // console.log(response?.data?.meta_data);
      // var metaData = {
      //   title: "Locate Perfume Store near me | Coral Perfumes Dubai, UAE",
      //   meta_description:
      //     "Shop perfumes from the top online perfume in Dubai with multiple brand with affordable price we delivery Perfumes all over UAE & Saudi Arabia.",
      //   meta_keywords: "",
      //   og_type: "Website",
      //   og_description:
      //     "Shop perfumes from the top online perfume in Dubai with multiple brand with affordable price we delivery Perfumes all over UAE & Saudi Arabia.",
      //   og_sitename: "Locate Perfume Store near me | Coral Perfumes Dubai, UAE",
      // };
      // Remove existing meta tags with the same name
      document
        .querySelectorAll('meta[name="description"]')
        .forEach((meta) => meta.remove());
      document
        .querySelectorAll('meta[property^="og:"]')
        .forEach((meta) => meta.remove());

      // Create and append new meta tags
      var head = document.head;
      var meta;

      // Title
      document.title = metaData.title || "Coral Ecom";

      // Description
      meta = document.createElement("meta");
      meta.name = "description";
      meta.content = metaData.meta_description;
      head.appendChild(meta);

      // Keywords (if any)
      if (metaData.meta_keywords) {
        meta = document.createElement("meta");
        meta.name = "keywords";
        meta.content = metaData.meta_keywords;
        head.appendChild(meta);
      }

      // Open Graph (og) tags
      meta = document.createElement("meta");
      meta.property = "og:type";
      meta.content = metaData.og_type;
      head.appendChild(meta);

      meta = document.createElement("meta");
      meta.property = "og:description";
      meta.content = metaData.og_description;
      head.appendChild(meta);

      meta = document.createElement("meta");
      meta.property = "og:site_name";
      meta.content = metaData.og_sitename;
      head.appendChild(meta);
    }
    return response;
  },
  (error) => {
    // console.log(error?.response?.status)
    if (error?.response?.status === 404) {
      window.location.href = `/404`;
      return error?.response;
    }
    if (error?.response?.status === 401) {
      // window.location.href = `/login`;
      return error?.response;
    } else {
      return error?.response;
    }
    //   const formattedError = formatAxiosError(error.response.data);
    return Promise.reject(error);
  }
);

export default service;
