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
      // const metaTags = document.getElementById("metaTags");
      // const head = document.getElementsByTagName('head')[0];
      // console.log(head)
      // const metaTags = `
      //   <meta property="og:title" content="Locate Perfume Store near me | Coral Perfumes Dubai, UAE" />
      //   <meta property="og:description" content="hop perfumes from the top online perfume in Dubai with multiple brand with affordable price we delivery Perfumes all over UAE & Saudi Arabia." />
      //   <meta property="og:image" content="https://coralperfumes.cloud6.ae/media/product_listing/product_listing_1711376379.webp" />
      // `;
      // head.insertAdjacentHTML('beforeend', metaTags);
      // let metaData = response?.data?.meta_data;
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
      // document
      //   .querySelectorAll('meta[name="description"]')
      //   .forEach((meta) => meta.remove());
      // document
      //   .querySelectorAll('meta[property^="og:"]')
      //   .forEach((meta) => meta.remove());

      // // Create and append new meta tags
      // var head = document.head;
      // var meta;

      // // Title
      // document.title = metaData.title || "Coral Ecom";

      // // Description
      // meta = document.createElement("meta");
      // meta.name = "description";
      // meta.content = metaData.meta_description;
      // head.appendChild(meta);

      // // Keywords (if any)
      // if (metaData.meta_keywords) {
      //   meta = document.createElement("meta");
      //   meta.name = "keywords";
      //   meta.content = metaData.meta_keywords;
      //   head.appendChild(meta);
      // }

      // // Open Graph (og) tags
      // var newMetaTag_title = document.createElement("meta");
      // newMetaTag_title.setAttribute("property", "og:title");
      // newMetaTag_title.setAttribute("content", metaData.og_title);
      // document.head.appendChild(newMetaTag_title);

      // var newMetaTag = document.createElement("meta");
      // newMetaTag.setAttribute("property", "og:type");
      // newMetaTag.setAttribute("content", metaData.og_type);
      // document.head.appendChild(newMetaTag);

      // var newMetaTag_desc = document.createElement("meta");
      // newMetaTag_desc.setAttribute("property", "og:description");
      // newMetaTag_desc.setAttribute("content", metaData.og_description);
      // document.head.appendChild(newMetaTag_desc);

      // var newMetaTag_site = document.createElement("meta");
      // newMetaTag_site.setAttribute("property", "og:site_name");
      // newMetaTag_site.setAttribute("content", metaData.og_site_name);
      // document.head.appendChild(newMetaTag_site);

      // var newMetaTag_url = document.createElement("meta");
      // newMetaTag_url.setAttribute("property", "og:url");
      // newMetaTag_url.setAttribute("content", metaData.og_url);
      // document.head.appendChild(newMetaTag_url);

      // var newMetaTag_image = document.createElement("meta");
      // newMetaTag_image.setAttribute("property", "og:image");
      // newMetaTag_image.setAttribute("content", metaData.og_image);
      // document.head.appendChild(newMetaTag_image);

      // var newMetaTag_image_height = document.createElement("meta");
      // newMetaTag_image_height.setAttribute("property", "og:image:height");
      // newMetaTag_image_height.setAttribute("content", metaData.og_image_height);
      // document.head.appendChild(newMetaTag_image_height);

      // var newMetaTag_image_width = document.createElement("meta");
      // newMetaTag_image_width.setAttribute("property", "og:image:width");
      // newMetaTag_image_width.setAttribute("content", metaData.og_image_width);
      // document.head.appendChild(newMetaTag_image_width);
    }
    return response;
  },
  (error) => {
    // console.log(error?.response?.status)
    if (error?.response?.status === 404) {
      // window.location.href = `/404`;
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
