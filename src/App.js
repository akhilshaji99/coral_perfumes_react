import logo from './logo.svg';
import "./assets/css/style.css";
import { BrowserRouter } from "react-router-dom";

import Router from "./router/router"

function App() {
  return (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
  );
}

export default App;
