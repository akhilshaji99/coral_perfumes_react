import React, { useState } from "react";

const Submenu = ({ submenu, styleClass, showSubMenu, goBack }) => {
  return (
    <ul className={`submenu ${styleClass}`}>
      {submenu.map((item, index) => (
        <li key={index} className={item.hasChild ? "hasChild" : ""}>
          <a href="#" onClick={() => showSubMenu(item)}>
            {item.text}
          </a>
        </li>
      ))}
      <li className="back">
        <a href="#" onClick={goBack}>
          Back
        </a>
      </li>
    </ul>
  );
};

const SimpleMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    setActiveSubMenu(null);
    document.body.classList.toggle("mmactive", isOpen);
  };

  const showSubMenu = (item) => {
    setActiveSubMenu(item);
  };

  const goBack = () => {
    setActiveSubMenu(null);
  };

  const options = {
    hamburgerId: "sm_menu_ham",
    wrapperClass: "sm_menu_outer",
    submenuClass: "submenu",
    menuStyle: "slide", // 'slide' or 'accordion'
    onMenuLoad: () => true,
    onMenuToggle: () => true,
  };

  const menuItems = [
    { text: "Home" },
    {
      text: "Services",
      hasChild: true,
      submenu: [
        { text: "Service 1" },
        { text: "Service 2" },
        { text: "Service 3" },
      ],
    },
    { text: "About" },
    {
      text: "Contact",
      hasChild: true,
      submenu: [{ text: "Contact 1" }, { text: "Contact 2" }],
    },
  ];

  return (
    <div>
      <div
        id={options.hamburgerId}
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`menu-outer ${options.wrapperClass} ${
          isOpen ? "active" : ""
        }`}
      >
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className={item.hasChild ? "hasChild" : ""}>
              <a href="#">{item.text}</a>
              {item.hasChild && activeSubMenu === item && (
                <Submenu
                  submenu={item.submenu}
                  styleClass={options.menuStyle}
                  showSubMenu={showSubMenu}
                  goBack={goBack}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SimpleMobileMenu;
