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
import AddressBook from "../pages/address_book/index";
import DashBoard from "../pages/dashboard/index";
import Stores from "../pages/stores/index";
import AlertPages from "../pages/alert_pages/index";
import PaymentSuccess from "../pages/alert_pages/PaymentSuccess";
import PaymentFailed from "../pages/alert_pages/PaymentFailed";
import PaymentWaiting from "../pages/alert_pages/PaymentWaiting";

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
        { path: "product/*", element: <ProductPage /> },
        { path: "product-details/*", element: <SingleProduct /> },
        { path: "cart", element: <Cart /> },
        {
          path: "checkout",
          element: userDatas ? <CheckOut /> : <Navigate to="/" />,
        },
        { path: "wishlist", element: <Wishlist /> },
        {
          path: "personal-info",
          element: userDatas ? <PersonalInfo /> : <Navigate to="/" />,
        },
        {
          path: "address-book",
          element: userDatas ? <AddressBook /> : <Navigate to="/" />,
        },
        {
          path: "orders",
          element: userDatas ? <Orders /> : <Navigate to="/" />,
        },
        {
          path: "dashboard",
          element: userDatas ? <DashBoard /> : <Navigate to="/" />,
        },
        { path: "stores", element: <Stores /> },
        {
          path: "alert",
          element: <AlertPages />,
        },
        {
          path: "success",
          element: userDatas ? <PaymentSuccess /> : <Navigate to="/" />,
        },
        {
          path: "error",
          element: userDatas ? <PaymentFailed /> : <Navigate to="/" />,
        },
        {
          path: "tamara/payment-response",
          element: userDatas ? <PaymentWaiting /> : <Navigate to="/" />,
        },
        { path: "*", element:userDatas ? <PersonalInfo /> : <Navigate to="/" />},
      ],
    },
  ];
  let element = useRoutes(routes);

  return element;
};
export default Router;
