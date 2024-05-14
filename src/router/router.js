import { useRoutes, Navigate } from "react-router-dom";
import HomePage from "../pages/home/index";
import LoginPage from "../pages/login/index";
import ProductPage from "../pages/product/index";
import SingleProduct from "../pages/single-product/Index";
import Cart from "../pages/cart/index";
import BaseLayout from "../layouts/BaseLayout/Index";
import CheckOut from "../pages/checkout/index";
import Wishlist from "../pages/wishlist/index";
import PersonalInfo from "../pages/personal_info/index";
import Orders from "../pages/orders/index";
import Returns from "../pages/returns/index";
import AddressBook from "../pages/address_book/index";
import DashBoard from "../pages/dashboard/index";
import Stores from "../pages/stores/index";
import StoresDetails from "../pages/store_detail/index";
import About from "../pages/about/index";
import Blog from "../pages/blog/index";
import BlogDetails from "../pages/blog_detail/index";
import BlogDetailsNew from "../pages/blog_details_new/index"
import Careers from "../pages/careers/index";
import CareerDetail from "../pages/career_detail/index";

import AlertPages from "../pages/alert_pages/index";
// import PaymentSuccess from "../pages/alert_pages/PaymentSuccess";
// import PaymentFailed from "../pages/alert_pages/PaymentFailed";
import PaymentWaiting from "../pages/alert_pages/PaymentWaiting";
import Faq from "../pages/faq/index";
import ReturnPolicy from "../pages/returnPolicy/index";
import PrivacyPolicy from "../pages/privacyPolicy/index";
import TermsConditions from "../pages/termsAndConditions/index";
import SingleOrder from "../pages/orders/SingleOrder";
import NotFound from "../pages/not_found/index";
import PrivateLabel from "../pages/PrivateLabel/index";
import ContactForm from "../pages/contact/ContactForm";
import Checkout_v2 from "../pages/checkout_v2/index";
import RedirectComponent from "../components/RedirectComponent";



const Router = () => {
  const userDatas = JSON.parse(localStorage.getItem("userDatas"));

  const routes = [
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "login/*",
          element: userDatas ? <Navigate to="/" /> : <LoginPage />,
        },
        { path: "products/:link_type/:link_value", element: <ProductPage /> },
        {
          path: "products/:link_type/:link_value/:random_key",
          element: <ProductPage />,
        },
        { path: "product/*", element: <SingleProduct /> },
        { path: "cart", element: <Cart /> },
        {
          path: "checkout",
          element: userDatas ? <Checkout_v2 /> : <Navigate to="/login" />,
        },
        // {
        //   path: "checkout_v2",
        //   element: userDatas ? <Checkout_v2 /> : <Navigate to="/login" />,
        // },

        {
          path: "wishlist",
          element: userDatas ? <Wishlist /> : <Navigate to="/login" />,
        },
        {
          path: "personal-info",
          element: userDatas ? <PersonalInfo /> : <Navigate to="/login" />,
        },
        {
          path: "address-book",
          element: userDatas ? <AddressBook /> : <Navigate to="/login" />,
        },
        {
          path: "orders",
          element: userDatas ? <Orders /> : <Navigate to="/login" />,
        },
        {
          path: "order-details/*",
          element: userDatas ? <SingleOrder /> : <Navigate to="/login" />,
        },
        {
          path: "returns",
          element: userDatas ? <Returns /> : <Navigate to="/login" />,
        },
        {
          path: "dashboard",
          element: userDatas ? <DashBoard /> : <Navigate to="/login" />,
        },
        { path: "coral-perfumes-showrooms", element: <Stores /> },
        { path: "coral-perfumes-showrooms/:id", element: <StoresDetails /> },
        { path: "about", element: <About /> },
        { path: "blog-details/*", element: <BlogDetails /> },
        { path: "blog", element: <Blog /> },
        { path: "careers", element: <Careers /> },
        { path: "career-detail/:id", element: <CareerDetail /> },
        //old blog routes redirecting
        { path: "guide-to-applying-perfume-best-perfume-in-uae/", element: <BlogDetailsNew />},
        { path: "discover-the-best-perfumes-for-women/", element: <BlogDetailsNew />},
        { path: "discover-the-scent-of-luxury-top-10-perfume-brands-in-uae/", element: <BlogDetailsNew />},
        { path: "discover-the-top-10-perfumes-in-dubai-you-must-experience/", element: <BlogDetailsNew />},
        { path: "enchanting-perfume-gift-sets-for-this-christmas-at-coral-perfumes-in-dubai/", element: <BlogDetailsNew />},
        { path: "best-niche-perfume-for-women/", element: <BlogDetailsNew />},
        { path: "benefits-of-wearing-long-lasting-perfume/", element: <BlogDetailsNew />},
        { path: "world-of-men-fragrance-buy-perfume-for-men/", element: <BlogDetailsNew />},
        { path: "where-to-buy-original-perfume-in-dubai/", element: <BlogDetailsNew />},
        { path: "6-useful-tips-to-choose-the-right-perfume/", element: <BlogDetailsNew />},
        { path: "concentrated-perfume-oils-in-uae/", element: <BlogDetailsNew />},
        { path: "arabic-fragrance-lovers/", element: <BlogDetailsNew />},
        { path: "difference-between-eau-de-perfume-and-eau-de-toilette/", element: <BlogDetailsNew />},
        { path: "tips-to-make-perfume-fragrances-last-longer/", element: <BlogDetailsNew />},
        { path: "people-love-to-wear-perfumes/", element: <BlogDetailsNew />},
        { path: "best-winter-perfume-for-women/", element: <BlogDetailsNew />},

        {
          path: "alert",
          element: <AlertPages />,
        },
        // {
        //   path: "success",
        //   element: userDatas ? <PaymentSuccess /> : <Navigate to="/" />,
        // },
        // {
        //   path: "error",
        //   element: userDatas ? <PaymentFailed /> : <Navigate to="/" />,
        // },
        {
          path: "tamara/payment-response",
          element: userDatas ? <PaymentWaiting /> : <Navigate to="/login" />,
        },
        {
          path: "tap/payment-response",
          element: userDatas ? <PaymentWaiting /> : <Navigate to="/login" />,
        },
        {
          path: "payment-tamara-cancel",
          element: userDatas ? <PaymentWaiting /> : <Navigate to="/login" />,
        },

        {
          path: "cod/success",
          element: userDatas ? <PaymentWaiting /> : <Navigate to="/login" />,
        },
        {
          path: "payment-tabby-success",
          element: userDatas ? <PaymentWaiting /> : <Navigate to="/login" />,
        },
        {
          path: "payment-tabby-cancel",
          element: userDatas ? <PaymentWaiting /> : <Navigate to="/login" />,
        },
        {
          path: "payment-tabby-failure",
          element: userDatas ? <PaymentWaiting /> : <Navigate to="/login" />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "perfume-in-uae",
          element: <HomePage />,
        },
        {
          path: "shopping-at-coral-perfumes-stores",
          element: <Stores />,
        },
        {
          path: "faq",
          element: <Faq />,
        },
        {
          path: "return-policy",
          element: <ReturnPolicy />,
        },
        {
          path: "privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "terms-conditions",
          element: <TermsConditions />,
        },
        {
          path: "perfume-manufacturer-in-uae",
          element: <PrivateLabel />,
        },
        {
          path: "contact-us",
          element: <ContactForm />,
        },
        {
          path: "/product-category/*",
          element: <RedirectComponent redirectUrl="/products/category/" />,
        },
        {
          path: "/perfume-brands/*",
          element: <RedirectComponent redirectUrl="/products/brands/" />,
        },
        
      ],
    },
  ];
  let element = useRoutes(routes);

  return element;
};
export default Router;
