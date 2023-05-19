import React from "react";
import "./formInput.styles.css";

function FormInput({ label, type }) {
  return (
    <div className="single-input">
      <label>{label}</label>
      <input type={type} />
    </div>
  );
}

export default FormInput;
