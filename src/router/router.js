import {useRoutes } from "react-router-dom";
import HomePage from "../pages/home/index";
import LoginPage from "../pages/login/index";
import BaseLayout from "../layouts/BaseLayout/Index";
const Router = () => {
    const routes = [
      {
        path: "/",
        element: <BaseLayout />,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "login", element: <LoginPage /> },
          // { path: "about", element: <About /> }
        ]
      }
    ];
    let element = useRoutes(routes);
  
    return element;
  };
export default Router;
