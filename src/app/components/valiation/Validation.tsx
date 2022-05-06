import { helperSignUpData } from "../become-helper/RegistrationForm";
import { LoginData } from "../homepage/Login";

export type errorList = {
  FirstName?: string;
  LastName?: string;
  Email?: string;
  Password?: string;
  ConfirmPassword?: string;
  Mobile?: string;
};

const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const helperSignUpValidation = (values: helperSignUpData) => {
  let errors: errorList = {};
  if (!values.FirstName) {
    errors.FirstName = "First Name is require";
  }
  if (!values.LastName) {
    errors.LastName = "Last Name is require";
  }
  if (!values.Email) {
    errors.Email = "Email is require";
  } else if (!regexEmail.test(values.Email)) {
    errors.Email = "Enter valid Email";
  }
  if (!values.Password) {
    errors.Password = "Password is required";
  } else if (!regexPassword.test(values.Password)) {
    errors.Password =
      "Password must contain one capital letter one small letter and length of pasword must be 8";
  }
  if (!values.ConfirmPassword) {
    errors.ConfirmPassword = "Confirm Password is required";
  } else if (!regexPassword.test(values.ConfirmPassword)) {
    errors.ConfirmPassword =
      "Password must contain one capital letter one small letter and length of password must be 8";
  } else if (values.Password !== values.ConfirmPassword) {
    errors.ConfirmPassword = "Password and ConfirmPassword does not match";
  }
  if (!values.Mobile) {
    errors.Mobile = "Mobile is required";
  } else if (values.Mobile.length !== 10) {
    errors.Mobile = "Mobile number must be of 10 digits";
  }
  return errors;
};

export const loginValidation = (values: LoginData) => {
  let errors: errorList = {};
  if (!values.Email) {
    errors.Email = "Email is require";
  } else if (!regexEmail.test(values.Email)) {
    errors.Email = "Enter valid Email";
  }
  if (!values.Password) {
    errors.Password = "Password is required";
  } else if (!regexPassword.test(values.Password)) {
    errors.Password =
      "Password must contain one capital letter one small letter and length of password must be 8";
  }
  return errors;
};
