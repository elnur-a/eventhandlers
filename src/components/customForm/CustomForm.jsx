import React from "react";
import FormInput from "../formInput/FormInput";
import MyButton from "../myButton/MyButton";
import "./customForm.style.css";

function CustomForm() {
  return (
    <form className="sign-up-form">
      <FormInput label="Display name" type="text" />
      <FormInput label="Email" type="email" />
      <FormInput label="Password" type="password" />
      <FormInput label="Confirm Password" type="password" />
      <FormInput label="Agree to terms" type="checkbox" />
      <MyButton name="Submit" type="large" />
    </form>
  );
}
export default CustomForm;
