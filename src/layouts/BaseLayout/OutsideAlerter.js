import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import $ from "jquery";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, onOutsideClick) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // Call the provided callback function to change the drawer value
        onOutsideClick(false);
        $("#cartDrawer").toggleClass("hide");
        $("#cartDrawer").removeClass("show");
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props) {
  const wrapperRef = useRef(null);

  // Callback to change drawer value
  const changeDrawerValue = (value) => {
    // Call the parent component's function
    props.changeDrawerValue(value);
  };
  // Attach the outside click handler
  useOutsideAlerter(wrapperRef, changeDrawerValue);

  return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
  changeDrawerValue: PropTypes.func.isRequired, // The callback function
};

export default OutsideAlerter;
