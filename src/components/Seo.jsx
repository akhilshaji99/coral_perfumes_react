import React from "react";

import { Helmet } from "react-helmet-async";

export const Seo = ({ title, meta_description, meta_keywords, og_type, og_title, og_description, og_url, og_image, og_image_height, og_image_width, og_site_name }) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={meta_description} />
        <meta name="keywords" content={meta_keywords} />
        <meta property="og:type" content={og_type} />
        <meta property="og:title" content={og_title} />
        <meta property="og:description" content={og_description} />
        <meta property="og:url" content={og_url} />
        <meta property="og:image" content={og_image} />
        <meta property="og:image_height" content={og_image_height} />
        <meta property="og:image_width" content={og_image_width} />
        <meta property="og:site_name" content={og_site_name} />
    </Helmet>
  );
};
