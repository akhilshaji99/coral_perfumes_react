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
import About from "../pages/about/index";
import Blog from "../pages/blog/index";
import Careers from "../pages/careers/index";
import CareerDetail from "../pages/career_detail/index";

import AlertPages from "../pages/alert_pages/index";
// import PaymentSuccess from "../pages/alert_pages/PaymentSuccess";
// import PaymentFailed from "../pages/alert_pages/PaymentFailed";
import PaymentWaiting from "../pages/alert_pages/PaymentWaiting";
import Faq from "../pages/faq/index";
import SingleOrder from "../pages/orders/SingleOrder";

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
        { path: "product-details/*", element: <SingleProduct /> },
        { path: "cart", element: <Cart /> },
        {
          path: "checkout",
          element: userDatas ? <CheckOut /> : <Navigate to="/login" />,
        },
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
        { path: "stores", element: <Stores /> },
        { path: "about", element: <About /> },
        { path: "blog", element: <Blog /> },
        { path: "careers", element: <Careers /> },
        { path: "career-detail", element: <CareerDetail /> },

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
          path: "cod/success",
          element: userDatas ? <PaymentWaiting /> : <Navigate to="/login" />,
        },
        // {
        //   path: "*",
        //   element: userDatas ? <PersonalInfo /> : <Navigate to="/" />,
        // },
        {
          path: "faq",
          element: <Faq />,
        },
      ],
    },
  ];
  let element = useRoutes(routes);

  return element;
};
export default Router;
