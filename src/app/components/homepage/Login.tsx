import React, { FormEvent, useState } from "react";
import { Button, styled, Modal, Box, TextField, Checkbox } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { errorList, loginValidation } from "../valiation/Validation";
import { useNavigate } from "react-router-dom";
// import { CheckBox } from "@mui/icons-material";

export type LoginData = {
  Email?: string;
  Password?: string;
};


const CustomButton = styled(Button)({
  color: "#ffffff",
  textTransform: "capitalize",
  fontSize: "16px",
  margin: "0 6px",
  backgroundColor: "transparent",
  border: "1px solid #ffffff",
  borderRadius: "20px",
  lineHeight: "24px",
  padding: "5px 20px 6px 20px",
  "@media(max-width:768px)": {
    marginBottom: "40px",
  },
  "&:hover": {
    backgroundColor: "#F4F5F8",
    color: "#1D7A8C",
    cursor: "pointer",
    a: {
      color: "#1D7A8C",
    },
  },
});

const CustomTextField = styled(TextField)({
  margin: "0 14px 15px 0",
  "& .MuiOutlinedInput-root": {
    height: "46px",
    padding: "0",
    width: "300px",
    marginBottom: "10px",
  },
  "@media(max-width:768px)": {
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

const LoginButton = styled(Button)({
  width: "300px",
  color: "#ffffff",
  textTransform: "capitalize",
  fontSize: "16px",
  margin: "20px 0 20px",
  backgroundColor: "#2b8b97",
  borderRadius: "20px",
  lineHeight: "24px",
  height: "46px",
  padding: "7px 20px 8px 20px",
  "@media(max-width:1024px)": {
    padding: "6px 10px ",
  },
  "@media(max-width:768px)": {
    color: "white",
  },
  a: {
    color: "white",
  },
  "&:hover": {
    backgroundColor: "#F4F5F8",
    color: "#1D7A8C",
    border: "1px solid #1d7a8c",
    cursor: "pointer",
    a: {
      color: "#1D7A8C",
    },
  },
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "400px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  margin: "0 auto",
};

const initialLoginData = {
  Email: "",
  Password: "",
};

const Login = () => {
  const [open, setOpen] = React.useState(false);
  const [loginData, setLoginData] = useState<LoginData>(initialLoginData);
  const [loginErrors, setLoginErrors] = useState<errorList>(
    initialLoginData
  );
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleFormChange = (e: {
    target: { name: string; value: number | string };
  }) => {
    setLoginData((preValue) => {
      const value = e.target.value.toString();
      return {
        ...preValue,
        [e.target.name]: value,
      };
    });
  };

  const authenticate = async(e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ErrorList = loginValidation(loginData);
    setLoginErrors(ErrorList);
    if(Object.keys(ErrorList).length === 0){
      try {
        let res:Response = await fetch(
          "http://localhost:4000/trainee2021/Login-User/login",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Email: loginData.Email,
              Password: loginData.Password,
            }),
          }
        );
        if (res.status === 200) {
          const result = await res.json();
          if(result.userTypeId === 1 && result.auth){
            console.log('Super User');
          }
          else if(result.userTypeId === 2 && result.auth){
            navigate('/user-management');
          }
          else if(result.userTypeId === 3 && result.auth){
            localStorage.setItem('Login', JSON.stringify({
              token:result.token,
              userTypeId:result.userTypeId,
              auth:result.auth
            }))
            navigate('/upcoming-services');
            console.log('Service Provider');
          }else if( result.userTypeId === 4 && result.auth){
            navigate('/customer-dashboard');
          }
          else{
            console.log('Unauthorised');
          }
        } else {
          alert("invalid username or password");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div>
      <CustomButton onClick={handleOpen}>Login</CustomButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ maxWidth: "300px", margin: "0 auto" }}>
            <CloseIcon
              onClick={handleClose}
              style={{ float: "right", color: "646464", cursor: "pointer" }}
            />
            <br />
            <form onSubmit={authenticate}>
              <h1 className="login-title">Login to your account</h1>
              <CustomTextField
                placeholder="Email"
                type="text"
                name="Email"
                value={loginData.Email}
                onChange={handleFormChange}
              />
              <p className="form-error">{loginErrors.Email}</p>
              <CustomTextField
                placeholder="Password"
                type="Password"
                name="Password"
                value={loginData.Password}
                onChange={handleFormChange}
              />
              <p className="form-error">{loginErrors.Password}</p>
              <div className="remember-me">
                <Checkbox style={{color:"#3b8b97"}}/>
                <p>Remember Me</p>
              </div>
              <LoginButton type="submit">Login</LoginButton>
            </form>
            <div className="login-footer">
              <button>Forgot Password?</button>
              <p>Dont have an account?</p>
              <button>
                <Link to="/create-account">Create an account</Link>
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Login;
