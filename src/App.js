import logo from './logo.svg';
import "./assets/css/style.css";
import { BrowserRouter, Route,useRoutes } from "react-router-dom";
import HomePage from "./pages/home/index";
import TestPage from "./pages/test/index";
import BaseLayout from "./layouts/BaseLayout";

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
function App() {
  return (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
  );
}

export default App;
