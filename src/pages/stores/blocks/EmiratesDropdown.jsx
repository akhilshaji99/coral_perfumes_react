import React, { useState } from "react";
import sortIcon from "../../../assets/img/icons/filter-mob-new.svg";

const EmiratesDropdown = ({ setEmirate,emirates ,label,setLabel}) => {
  // Create a state variable to manage the visibility of the dropdown content
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };



  return (
    <div className="dropdown product-custom-dropdown">
      <a
        className=" dropdown-toggle text-dark btn-filter"
        type="button"
        onClick={toggleDropdown}
      >
        {label}{" "}
        <svg
          className="regular-sort-icon"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <img className="mob-sort-icon" src={sortIcon} alt="Coral Perfumes" />
      </a>
      {/* Render the dropdown content based on the state */}
      {isDropdownOpen && (
        <div className="dropdown-menu" style={{ display: "block" }}>
          {/* Add your dropdown items here */}
          {emirates.map((emirate, index) => {
            return (
              <label
                key={index}
                className="dropdown-item dropdown-item-custom"
                onClick={() => {
                  console.log(emirate.name);
                  setEmirate(emirate.id);
                  setLabel(emirate.name)
                  setDropdownOpen(!isDropdownOpen);
                }}
              >
                {emirate.name}
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EmiratesDropdown;
