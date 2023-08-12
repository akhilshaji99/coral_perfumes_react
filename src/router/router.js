import { useRoutes,Navigate } from "react-router-dom";
import HomePage from "../pages/home/index";
import LoginPage from "../pages/login/index";
import ProductPage from "../pages/product/index";
import SingleProduct from "../pages/single-product/Index";
import Cart from "../pages/cart/index";
import BaseLayout from "../layouts/BaseLayout/Index";
import CheckOut from "../pages/checkout/index";
import Wishlist from "../pages/wishlist/index";
import PersonalInfo from "../pages/personal_info/index";
import AddressBook from "../pages/address_book/index";
import DashBoard from "../pages/dashboard/index";
import Stores from "../pages/stores/index";

const Router = () => {
  const userDatas = JSON.parse(localStorage.getItem("userDatas"));

  const routes = [
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "login/*", element: userDatas? <Navigate to="/"/>:  <LoginPage /> },
        { path: "product/*", element: <ProductPage /> },
        { path: "product-details/*", element: <SingleProduct /> },
        { path: "cart", element: <Cart /> },
        { path: "checkout", element: userDatas?<CheckOut />: <Navigate to="/"/> },
        { path: "wishlist", element: <Wishlist /> },
        { path: "personal-info", element: userDatas?<PersonalInfo /> : <Navigate to="/"/> },
        { path: "address-book", element: userDatas?  <AddressBook />: <Navigate to="/"/> },
        { path: "dashboard", element: <DashBoard /> },
        { path: "stores", element: <Stores /> },
        // { path: "about", element: <About /> }
        { path: '*', element: <Navigate to="/404" replace /> }
      ],
    },
  ];
  let element = useRoutes(routes);

  return element;
};
export default Router;
