const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const axios = require("axios");

const PORT = process.env.PORT || 3001;
const indexPath = path.resolve(__dirname, "./build", "index.html");
const backend_url = "https://coralperfumes.cloud6.ae/";

// static resources should just be served as they are
app.use(express.static(path.resolve(__dirname, "./build"), { maxAge: "30d" }));

// here we serve the index.html page
app.get("/*", async (req, res, next) => {
  try {
    console.log("req", req);
    const htmlData = fs.readFileSync(indexPath, "utf8");
    const current_path = req.path.split("/")[1];
    console.log("current_path", current_path);
    // Perform the API call
    let url = backend_url + "coral-api/get_meta_data/home";
    if (current_path === "about") {
      url = backend_url + "coral-api/get_meta_data/about";
    }
    if (current_path === "perfume-manufacturer-in-uae") {
      url = backend_url + "coral-api/get_meta_data/private_label";
    }
    if (current_path === "product") {
      const product_slug = req.path.split("/")[2];
      url =
        backend_url + "coral-api/get_meta_data/product-details/" + product_slug;
    }
    if (current_path === "blog-details") {
      const blog_slug = req.path.split("/")[2];
      url = backend_url + "coral-api/get_meta_data/blog-details" + blog_slug;
    }
    if (current_path === "products") {
      const product_type = req.path.split("/")[2];
      if (product_type === "brands") {
        const brand_slug = req.path.split("/")[3];
        url =
          backend_url + "coral-api/get_meta_data/products-brands/" + brand_slug;
      }
      if (product_type === "category") {
        const category_slug = req.path.split("/")[3];
        url =
          backend_url +
          "coral-api/get_meta_data/products-category/" +
          category_slug;
      }
    }

    const apiResponse = await axios.get(url);
    const post = apiResponse?.data;
    // if (!post) {
    //     return res.status(404).json({ error: 'Post not found' });
    // }
    // console.log('post.meta_data',post.meta_data)
    // Inject meta tags
    let modifiedHtmlData = htmlData
      // .replace(
      //   "__META_CANONICAL_URL__",
      //   "https://coralperfumes.com" + req.path
      // )
      .replace(
        "<title>Perfumes In Dubai | Buy Perfumes Online UAE - Coral Perfumes</title>",
        `<title>${post?.meta_data?.title}</title>`
      )

      .replace("__META_OG_TITLE__", post?.meta_data?.og_title)
      .replace("__META_DESCRIPTION__", post?.meta_data?.meta_description)
      .replace("__META_KEYWORDS__", post?.meta_data?.meta_keywords)
      .replace("__META_OG_TYPE__", post?.meta_data?.og_type)
      .replace("__META_OG_URL__", 'https://coralperfumes.com')
      .replace("__META_OG_IMAGE__", post?.meta_data?.og_image)
      .replace("__META_OG_IMAGE_HEIGHT__", post?.meta_data?.og_image_height)
      .replace("__META_OG_IMAGE_WIDTH__", post?.meta_data?.og_image_width)
      .replace("__META_OG_DESCRIPTION__", post?.meta_data?.og_description)
      .replace("__META_OG_SITE_NAME__", post?.meta_data?.og_site_name);

    return res.send(modifiedHtmlData);
  } catch (err) {
    console.error("Error during request processing", err);
    return res
      .status(500)
      .json({ error: "Internal Server Error", details: err.message });
  }
});

app.get("/", async (req, res, next) => {
  console.log("homeeee");
});

// listening...
app.listen(PORT, (error) => {
  if (error) {
    return console.log("Error during app startup", error);
  }
  console.log("listening on " + PORT + "...");
});
