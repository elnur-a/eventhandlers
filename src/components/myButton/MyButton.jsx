import React from "react";
import "./myButton.style.css";

function MyButton({ name, type }) {
  //will trigger when button is clicked
  const onClickHandler = () => {
    alert(`${name}is clicked`);
  };
  return (
    <button className={`${type}`} onClick={onClickHandler}>
      {name}
    </button>
  );
}
export default MyButton;
