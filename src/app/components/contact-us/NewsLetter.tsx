import React, { FormEvent } from "react";
import { Button, TextField, styled } from "@mui/material";

const CustomEmailField = styled(TextField)({
  width: "233px",
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#565656",
    border: "border: 1px solid #565656",
  },
  "& .MuiInputBase-root": {
    borderRadius: "20px",
    borderColor: "#565656",
    backgroundColor: "#F4F5F8",
    height: "40px",
    maxWidth: "233px",
  },
  "& .MuiOutlinedInput-input": {
    padding: "12px 20px 13px",
    fontSize: "14px",
  },
  "@media(max-width:768)": {
    width: "190px",
  },
});

const NewsLetter = () => {
  const [email, setEmail] = React.useState<string>("");

  const onChangeHandler = (e: {
    target: { name: string; value: string | number };
  }) => {
    const value = e.target.value.toString();
    setEmail(value);
  };

  const onSubmitEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    try {
      let res = await fetch(
        "http://localhost:4000/trainee2021/contact-us/newsletter/sb-user",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Email: email,
          }),
        }
      );
      if (res.status === 200) {
        alert("Subscribe Successfully");
        console.log(res.json());
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
    setEmail("");
  };

  return (
    <React.Fragment>
      <h1 className="newsletter-h1">SUBSCRIBE TO NEWSLETTER</h1>
      <form className="email-box" onSubmit={onSubmitEmail}>
        <CustomEmailField
          style={{ flexGrow: "1" }}
          name="Email"
          placeholder="YOUR EMAIL"
          value={email}
          onChange={onChangeHandler}
        ></CustomEmailField>
        <Button type="submit">Submit</Button>
      </form>
    </React.Fragment>
  );
};

export default NewsLetter;
