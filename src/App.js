import "./assets/css/style.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router"
require("bootstrap");

function App() {
  return (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
  );
}

export default App;
