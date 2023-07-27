import React, { useState } from "react";

const CustomDropdown = ({applyRelevanceFilter}) => {
  // Create a state variable to manage the visibility of the dropdown content
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const filterDatas = [
    { label: "Relevance", value: "Relevance" },
    { label: "Price-Low To High", value: "Price-Low To High" },
    { label: "Price-High to Low", value: "Price-High to Low" },
    { label: "New", value: "New" },
  ];

  return (
    <div className="dropdown product-custom-dropdown">
      <a
        className=" dropdown-toggle sort-dropdown"
        type="button"
        onClick={toggleDropdown}
      >
        Sort By Relevance{" "}
        <svg
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
      </a>
      {/* Render the dropdown content based on the state */}
      {isDropdownOpen && (
        <div className="dropdown-menu" style={{ display: "block" }}>
          {/* Add your dropdown items here */}
          {filterDatas.map((filterData, index) => {
            return (
              <label
                key={index}
                className="dropdown-item dropdown-item-custom"
                onClick={() => {
                  console.log(filterData.value);
                  applyRelevanceFilter(filterData.value);
                  setDropdownOpen(!isDropdownOpen);
                }}
              >
                {filterData.label}
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
