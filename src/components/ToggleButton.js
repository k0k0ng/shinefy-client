import React from "react";
import PropTypes from "prop-types";
import "../styles/ToggleButton.css";

const ToggleButton = ({ selectedOption, onOptionChange }) => {
  const handleToggle = (event) => {
    const newOption = event.target.id;
    onOptionChange(newOption);
  };

  return (
    <div className="switch-wrapper">
      <input
        id="monthly"
        type="radio"
        name="switch"
        checked={selectedOption === "monthly"}
        onChange={handleToggle}
      />
      <input
        id="yearly"
        type="radio"
        name="switch"
        checked={selectedOption === "yearly"}
        onChange={handleToggle}
      />
      <label htmlFor="monthly">Monthly</label>
      <label htmlFor="yearly">Yearly</label>
      <span className="highlighter"></span>
    </div>
  );
};

ToggleButton.propTypes = {
  selectedOption: PropTypes.oneOf(["monthly", "yearly"]).isRequired,
  onOptionChange: PropTypes.func.isRequired,
};

export default ToggleButton;