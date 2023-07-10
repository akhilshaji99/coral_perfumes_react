import {useRoutes } from "react-router-dom";
import HomePage from "../pages/home/index";
import TestPage from "../pages/test/index";
import BaseLayout from "../layouts/BaseLayout/Index";
const Router = () => {
    const routes = [
      {
        path: "/",
        element: <BaseLayout />,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "home", element: <TestPage /> },
          // { path: "about", element: <About /> }
        ]
      }
    ];
    let element = useRoutes(routes);
  
    return element;
  };
export default Router;
