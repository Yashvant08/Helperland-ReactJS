import {
  Box,
  Button,
  Checkbox,
  Grid,
  InputAdornment,
  styled,
  TextField,
} from "@mui/material";
import React, { FormEvent, useState } from "react";
import StarImage from "../contact-us/StarImage";
import { Link } from "react-router-dom";
import { errorList, helperSignUpValidation } from "../valiation/Validation";

export type customerSignUpData = {
  FirstName: string | undefined;
  LastName: string | undefined;
  Email: string | undefined;
  Password: string | undefined;
  ConfirmPassword: string | undefined;
  Mobile: string | undefined;
};

const CustomTextField = styled(TextField)({
  margin: "0 7px 15px 7px",
  "& .MuiOutlinedInput-root": {
    height: "46px",
    padding: "0",
    width: "300px",
    marginBottom: "15px",
  },
  "@media(max-width:786px)": {
    "& .MuiOutlinedInput-root": {
      height: "36px",
      fontSize: "14px",
      width: "270px",
    },
  },
  "@media(max-width:622px)": {
    margin: "0 0 15px 0",
  },
});
const CustomPhoneNumber = styled(TextField)({
  margin: "0 7px 15px 7px",
  "& .MuiOutlinedInput-root": {
    height: "46px",
    padding: "0",
    width: "300px",
    marginBottom: "15px",
  },
  "& .MuiInputAdornment-root": {
    maxHeight: "46px",
    height: "47px",
    width: "57px",
    background: "#F1F1F1",
    borderRight: "1px solid #C8C8C8",
  },
  "& .MuiInputAdornment-root ": {
    "& p": {
      padding: "15px",
    },
  },
  "@media(max-width:786px)": {
    "& .MuiOutlinedInput-root": {
      height: "36px",
      fontSize: "14px",
      width: "270px",
    },
    "& .MuiInputAdornment-root": {
      height: "36px",
      fontSize: "14px",
      "& p": {
        fontSize: "14px",
      },
    },
  },
  "@media(max-width:622px)": {
    margin: "0 0 15px 0",
  },
});
const CustomButton = styled(Button)({
  width: "150px",
  color: "#ffffff",
  fontSize: "16px",
  textTransform: "capitalize",
  backgroundColor: "#28afbf",
  borderRadius: "30px",
  height: "46px",
  margin: "20px 0 30px 0",
});

const CreateAccount = () => {
  const initialCustomerData = {
    FirstName: "",
    LastName: "",
    Mobile: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  };
  const [customerData, setCustomerData] =
    useState<customerSignUpData>(initialCustomerData);
  const [createAccountErrors, setCreateAccountErrors] =
    useState<errorList>(initialCustomerData);

  const handleFormChange = (e: {
    target: { name: string; value: number | string };
  }) => {
    setCustomerData((preValue) => {
      const value = e.target.value.toString();
      console.log(value);
      return {
        ...preValue,
        [e.target.name]: value,
      };
    });
  };

  const createAccount = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ErrorList = helperSignUpValidation(customerData);
    setCreateAccountErrors(ErrorList);
    if (Object.keys(ErrorList).length === 0) {
      try{
        let res = await fetch(
          "http://localhost:4000/trainee2021/Login-User/userRegistration",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              FirstName: customerData.FirstName,
              LastName: customerData.LastName,
              Email: customerData.Email,
              Password: customerData.Password,
              ConfirmPassword: customerData.ConfirmPassword,
              Mobile: customerData.Mobile,
            }),
          }
        );
        const result = await res.json();
        if (res.status === 200) {
          alert(result.message);
          setCustomerData(initialCustomerData);
        } else {
          alert(result.message);
          console.log("error");
        }
      }
      catch (err){
        console.log(err);
      }
    }
  };

  return (
    <React.Fragment>
      <div style={{ marginTop: "60px" }}>
        <StarImage heading="Create an account"></StarImage>
        <form className="create-account" onSubmit={createAccount}>
          <Box
            sx={{ "& .MuiTextField-root": { margin: "0 14px 15px 0" } }}
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <Grid>
              <Grid item lg={12} md={12} sm={6}>
                <div className="create-account-form-row">
                  <div className="form-input-item">
                    <CustomTextField
                      placeholder="First Name"
                      type="text"
                      name="FirstName"
                      value={customerData.FirstName}
                      onChange={handleFormChange}
                    />
                    <p className="form-error">
                      {createAccountErrors.FirstName}
                    </p>
                  </div>
                  <div className="form-input-item">
                    <CustomTextField
                      placeholder="Last Name"
                      type="text"
                      name="LastName"
                      value={customerData.LastName}
                      onChange={handleFormChange}
                    />
                    <p className="form-error">{createAccountErrors.LastName}</p>
                  </div>
                </div>
              </Grid>
              <Grid item lg={12} md={12} sm={6}>
                <div className="create-account-form-row">
                  <div className="form-input-item">
                    <CustomTextField
                      placeholder="Email"
                      type="text"
                      name="Email"
                      value={customerData.Email}
                      onChange={handleFormChange}
                    />
                    <p className="form-error">{createAccountErrors.Email}</p>
                  </div>
                  <div className="form-input-item">
                    <CustomPhoneNumber
                      placeholder="Mobile number"
                      type="text"
                      name="Mobile"
                      value={customerData.Mobile}
                      onChange={handleFormChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">49</InputAdornment>
                        ),
                      }}
                    />
                    <p className="form-error">{createAccountErrors.Mobile}</p>
                  </div>
                </div>
              </Grid>
              <Grid item lg={12} md={12} sm={6}>
                <div className="create-account-form-row">
                  <div className="form-input-item">
                    <CustomTextField
                      placeholder="Password"
                      type="password"
                      name="Password"
                      value={customerData.Password}
                      onChange={handleFormChange}
                    />
                    <p className="form-error">{createAccountErrors.Password}</p>
                  </div>
                  <div className="form-input-item">
                    <CustomTextField
                      placeholder="ConfirmPassword"
                      type="password"
                      name="ConfirmPassword"
                      value={customerData.ConfirmPassword}
                      onChange={handleFormChange}
                    />
                    <p className="form-error">
                      {createAccountErrors.ConfirmPassword}
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
          <div className="account-checkbox">
            <Checkbox style={{ padding: "0", color: "#2b8b97" }} />
            <p>
              I have read the{" "}
              <span style={{ color: "#1fb6ff" }}> privacy policy</span>
            </p>
          </div>
          <div className="create-account-btn">
            <CustomButton type="submit">Register</CustomButton>
            <p>
              Already register?{" "}
              <Link to="/">
                <span style={{ color: "#28afbf" }}>Login Now</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CreateAccount;
