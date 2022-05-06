import React, { FormEvent, useState } from "react";
import {
  TextField,
  styled,
  Box,
  InputAdornment,
  Checkbox,
  Button,
} from "@mui/material";
import { ArrowWhite } from "../../assets/index";
import {helperSignUpValidation, errorList} from "../valiation/Validation"

export type helperSignUpData = {
  FirstName: string | undefined;
  LastName: string | undefined;
  Email: string | undefined;
  Password: string | undefined;
  ConfirmPassword: string | undefined;
  Mobile: string | undefined;
};

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    height: "46px",
    padding: "0",
    width: "360px",
    marginBottom: "15px",
  },
  "@media(max-width:768px)": {
    "& .MuiOutlinedInput-root": {
      height: "36px",
      fontSize: "14px",
      width: "270px",
    },
  },
  "@media(max-width:992px)": {
    "& .MuiOutlinedInput-root": {
      height: "38px",
      width: "350px",
    },
  },
});
const CustomPhoneNumber = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    height: "46px",
    padding: "0",
    width: "360px",
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
  "@media(max-width:768px)": {
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
  "@media(max-width:992px)": {
    "& .MuiOutlinedInput-root": {
      height: "38px",
      width: "350px",
    },
    "& .MuiInputAdornment-root": {
      height: "38px",
      width: "57px",
    },
  },
});

const RegistrationForm = () => {
  const initialHelperSignUpData = {
    FirstName: "",
    LastName: "",
    Mobile: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  };
  const [helperSignUpData, setHelperSignUpData] = useState<helperSignUpData>(
    initialHelperSignUpData
  );
  const [formErrors, setFormErrors] = useState<errorList>(
    initialHelperSignUpData
  );
  const [isSubmit, setIsSubmit] = useState(false);

  const handleFormChange = (e: {
    target: { name: string; value: number | string };
  }) => {
    setHelperSignUpData((preValue) => {
      const value = e.target.value.toString();
      return {
        ...preValue,
        [e.target.name]: value,
      };
    });
  };

  const becomeHelper = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors(helperSignUpValidation(helperSignUpData));
    setIsSubmit(true);
    console.log(isSubmit);
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      try {
        let res = await fetch(
          "http://localhost:4000/trainee2021/Login-User/sp-sign-up",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              FirstName: helperSignUpData.FirstName,
              LastName: helperSignUpData.LastName,
              Email: helperSignUpData.Email,
              Password: helperSignUpData.Password,
              ConfirmPassword: helperSignUpData.ConfirmPassword,
              Mobile: helperSignUpData.Mobile,
            }),
          }
        );
        if (res.status === 200) {
          alert("Verification link sent to email");
          console.log(res.json());
        } else {
          alert("error in signing up");
          console.log("error");
        }
      } catch (err) {
        console.log(err);
      }
    }else{
      console.log('hi');
    }
    // setHelperSignUpData(initialHelperSignUpData);
  };



  return (
    <React.Fragment>
      <div className="contact-us-form-main">
        <form className="registration-from" onSubmit={becomeHelper}>
          <h1>Register Now!</h1>
          <Box sx={{ "& .MuiTextField-root": { margin: "0 0 15px 0" } }}>
            <CustomTextField
              placeholder="First Name"
              type="text"
              name="FirstName"
              value={helperSignUpData.FirstName}
              onChange={handleFormChange}
            />
            <p className="form-error">{formErrors.FirstName}</p>
            <CustomTextField
              placeholder="Last Name"
              type="text"
              name="LastName"
              value={helperSignUpData.LastName}
              onChange={handleFormChange}
            />
            <p className="form-error">{formErrors.LastName}</p>
            <CustomTextField
              placeholder="Email"
              type="text"
              name="Email"
              value={helperSignUpData.Email}
              onChange={handleFormChange}
            />
            <p className="form-error">{formErrors.Email}</p>
            <CustomPhoneNumber
              placeholder="Mobile number"
              type="text"
              name="Mobile"
              value={helperSignUpData.Mobile}
              onChange={handleFormChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">49</InputAdornment>
                ),
              }}
            />
            <p className="form-error">{formErrors.Mobile}</p>
            <CustomTextField
              placeholder="Password"
              type="password"
              name="Password"
              value={helperSignUpData.Password}
              onChange={handleFormChange}
            />
            <p className="form-error">{formErrors.Password}</p>
            <CustomTextField
              placeholder="ConfirmPassword"
              type="password"
              name="ConfirmPassword"
              value={helperSignUpData.ConfirmPassword}
              onChange={handleFormChange}
            />
            <p className="form-error">{formErrors.ConfirmPassword}</p>
          </Box>
          <div className="checkbox">
            <Checkbox defaultChecked style={{ padding: "0" }} />
            <p>Send me newsletter from Helperland</p>
          </div>
          <div className="checkbox">
            <Checkbox defaultChecked style={{ padding: "0" }} />
            <p>
              I accept{" "}
              <span style={{ color: "#1fb6ff" }}>terms and condition</span>{" "}
              &amp;
              <span style={{ color: "#1fb6ff" }}> privacy policy</span>
            </p>
          </div>
          <div className="getStarted-btn">
            <Button type="submit">
              Get Started
              <img src={ArrowWhite} alt="white-arrow" />
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default RegistrationForm;
