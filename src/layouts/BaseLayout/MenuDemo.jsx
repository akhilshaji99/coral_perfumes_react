import React, { useState } from "react";
import { Link } from "react-router-dom";

const MegaMenu = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    setOpenSubmenu(index);
  };

  const handleMouseLeave = () => {
    setOpenSubmenu(null);
  };

  const handleSubmenuItemClicked = () => {
    setOpenSubmenu(null); // Close submenu on submenu item click
  };

  const menuItems = [
    { label: "Home", submenu: [] },
    {
      label: "Products",
      submenu: ["Product 1", "Product 2", "Product 3"],
    },
    {
      label: "Services",
      submenu: ["Service 1", "Service 2", "Service 3"],
    },
    { label: "Contact", submenu: [] },
  ];

  return (
    <nav className="mega-menu">
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${
              item.submenu.length > 0 ? "has-submenu" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleSubmenuToggle(index)}
          >
            <a href="#">{item.label}</a>
            {item.submenu.length > 0 && (
              <div className={`submenu ${openSubmenu === index ? "open" : ""}`}>
                <ul>
                  {item.submenu.map((subitem, subindex) => (
                    <li key={subindex}>
                      <a href="#">{subitem}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MegaMenu;
