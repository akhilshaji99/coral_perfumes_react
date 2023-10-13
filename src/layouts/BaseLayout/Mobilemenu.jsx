// App.js
import React, { useEffect } from "react";
import $ from "jquery";

// import './App.css';

function MobileMenu() {
  useEffect(() => {
    const $ = window.jQuery;

    $("#mobile-menu").simpleMobileMenu();

    $("#menu-toggle").click(function () {
      $("#mobile-menu").toggleClass("menu-open");
    });

    $("#back-button").click(function () {
      $("#mobile-menu .sub-menu-open").removeClass("sub-menu-open");
    });

    $(".has-submenu a").click(function (e) {
      e.preventDefault();
      $(this).parent().toggleClass("sub-menu-open");
    });
  }, []);

  return (
    <div className="App">
      <header>
        <button id="menu-toggle">Open Menu</button>
      </header>

      <nav id="mobile-menu">
        <ul>
          <li>
            <a href="#menu-item-1">Menu Item 1</a>
          </li>
          <li>
            <a href="#menu-item-2">Menu Item 2</a>
          </li>
          <li className="has-submenu">
            <a href="#">Submenu</a>
            <ul>
              <li>
                <a href="#submenu-item-1">Submenu Item 1</a>
              </li>
              <li>
                <a href="#submenu-item-2">Submenu Item 2</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div id="menu-back">
        <button id="back-button">Back</button>
      </div>

      <main>{/* Your content goes here */}</main>
    </div>
  );
}

export default MobileMenu;
