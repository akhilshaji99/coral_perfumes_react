import "./assets/css/style.css";
import "./assets/css/custom.css";
import './App.css'
// import "./assets/css/jquery-simple-mobilemenu-slide.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";

require("bootstrap");

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
export default App;
