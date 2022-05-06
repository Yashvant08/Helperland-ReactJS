import React, { FormEvent, useState } from "react";
import {
  TextField,
  styled,
  Box,
  InputAdornment,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { Forma1_3 } from "../../assets";

type contactUsData = {
  FirstName: string | undefined;
  LastName: string | undefined;
  PhoneNumber: string | undefined;
  Email: string | undefined;
  Message: string | undefined;
};

const NewIcon = () => {
  return <img src={Forma1_3} alt="downArrow" style={{ marginRight: "20px" }} />;
};

const CustomTextField = styled(TextField)({
  margin: "0 14px 15px 0",
  "& .MuiOutlinedInput-root": {
    height: "46px",
    padding: "0",
    width: "300px",
  },
  "@media(max-width:786px)": {
    "& .MuiOutlinedInput-root": {
      height: "36px",
      fontSize: "14px",
    },
  },
  "@media(max-width:622px)": {
    margin: "0 0 15px 0",
  },
});
const CustomPhoneNumber = styled(TextField)({
  margin: "0 14px 15px 0",
  "& .MuiOutlinedInput-root": {
    height: "46px",
    padding: "0",
    width: "300px",
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
    },
    "& .MuiInputAdornment-root": {
      height: "36px",
      fontSize: "14px",
    },
  },
  "@media(max-width:622px)": {
    margin: "0 0 15px 0",
  },
});
const CustomBox = styled(Box)({
  margin: "0 14px 15px 0",
  "& .MuiOutlinedInput-root": {
    height: "46px",
    width: "614px",
  },
  "& .MuiSelect-select": {
    textAlign: "left",
    color: "#a0a0a0",
  },
  "@media(max-width:786px)": {
    "& .MuiOutlinedInput-root": {
      height: "36px",
      fontSize: "14px",
    },
  },
  "@media(max-width:622px)": {
    margin: "0 0 15px 0",
    "& .MuiOutlinedInput-root": {
      height: "46px",
      width: "300px",
    },
  },
});
const CustomMessage = styled(TextField)({
  margin: "0 14px 15px 0",
  "& .MuiOutlinedInput-root": {
    height: "146px",
    width: "614px",
    alignItems: "start",
  },
  "@media(max-width:622px)": {
    margin: "0 0 15px 0",
    "& .MuiOutlinedInput-root": {
      width: "300px",
      fontSize: "14px",
    },
  },
});

const Form: React.FC = () => {
  const initialContactUsData = {
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    Email: "",
    Message: "",
  };
  const [contactUsData, setContactUsData] =
    useState<contactUsData>(initialContactUsData);
  // const [responseMessage, setResponseMessage] = useState("");
  const [selectValue, setSelectValue] = React.useState("");

  const handleSelect = (event: { target: any }) => {
    setSelectValue(event.target.value);
  };

  const handleFormChange = (e: {
    target: { name: string; value: number | string };
  }) => {
    setContactUsData((preValue) => {
      const value = e.target.value.toString();
      return {
        ...preValue,
        [e.target.name]: value,
      };
    });
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(contactUsData);
    console.log(selectValue);
    try {
      let res = await fetch(
        "http://localhost:4000/trainee2021/contact-us/createContact",
        {
          method: "POST",
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            FirstName: contactUsData.FirstName,
            LastName: contactUsData.LastName,
            Email: contactUsData.Email,
            Subject: selectValue,
            PhoneNumber: contactUsData.PhoneNumber,
            Message: contactUsData.Message,
          }),
        }
      );
      if (res.status === 200) {
        alert("data submitted seccessfully")
        console.log(res.json());
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
    setContactUsData(initialContactUsData);
    setSelectValue('');
  };
  return (
    <React.Fragment>
      <form className="contact-us-form" onSubmit={submitForm}>
        <Box>
          <CustomTextField
            placeholder="First Name"
            name="FirstName"
            value={contactUsData.FirstName}
            onChange={handleFormChange}
          />
          <CustomTextField
            placeholder="Last Name"
            name="LastName"
            value={contactUsData.LastName}
            onChange={handleFormChange}
          />
          <CustomPhoneNumber
            placeholder="Mobile number"
            name="PhoneNumber"
            value={contactUsData.PhoneNumber}
            onChange={handleFormChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">49</InputAdornment>
              ),
            }}
          />
          <CustomTextField
            placeholder="Email"
            name="Email"
            value={contactUsData.Email}
            onChange={handleFormChange}
          />
          <CustomBox>
            <Select
              value={selectValue}
              name="Subject"
              onChange={handleSelect}
              IconComponent={NewIcon}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="Subject">Subject</MenuItem>
              <MenuItem value={"Subject 1"}>Subject 1</MenuItem>
              <MenuItem value={"Subject 2"}>Subject 2</MenuItem>
              <MenuItem value={"Subject 3"}>Subject 3</MenuItem>
            </Select>
          </CustomBox>
          <CustomMessage
            placeholder="Message"
            name="Message"
            value={contactUsData.Message}
            onChange={handleFormChange}
          />
          <div className="SubmitBtn">
            <Button type="submit">Submit</Button>
          </div>
        </Box>
      </form>
    </React.Fragment>
  );
};

export default Form;
