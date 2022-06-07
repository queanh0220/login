import { TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import InputForm from "../Component/InputForm";

import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";

export default function Home() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    unregister,
    watch,
    setError,
    clearErrors,
  } = useForm();
  const clientId = '430767610295-car63jkfq7vumfs469a51k7bjmnpcp0j.apps.googleusercontent.com'
  console.log(watch("inputHello"));
  const handleClick = (e) => {
    e.preventDefault();
    window.open('http://localhost:4000/auth/google','_self')

  }
  const handleLogin = (googleData) => {
    console.log("login",googleData);
    // axios.post('http://localhost:4000/user/login',{tokenId: googleData.tokenId}).then(res => {
    //   console.log(res);
    // }).catch(err => {console.log(err)})
  };
  const handleFailure = (result) => {
    console.log("fail",result);
  };
  
  return (
    <div>
      <form class="form">
        {/* <Controller
          control={control}
          name="inputHello"
          rules={{
            required: "this field is required",
            min: {
              value: 8,
              message: "at lest 8 characters", // JS only: <p>error message</p> TS only support string
            },
          }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <TextField
              onBlur={onBlur} // notify when input is touched
              onChange={onChange} // send value to hook form
              checked={value}
              inputRef={ref}
              error
              defaultValue="Hello World"
              helperText={errors.inputHello && errors.inputHello.message}
              variant="standard"
            />
          )}
        /> */}
        {/* <InputForm label={"UserName"} register={register} required />
        <InputForm label={"Password"} register={register} required /> */}
        {/* <span className="err">
          {errors.UserName && "*" + errors.UserName.message}
        </span> */}
        <button onClick={handleClick}>Click</button>
        <GoogleLogin
        ></GoogleLogin>
        {/* <button
          onClick={(e) => {
            e.preventDefault();
            setError(
              "UserName",
              { type: "custom", message: "This is custom error" },
              { shouldFocus: true }
            );
          }}
        >
          set Error UserName
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            clearErrors("UserName");
          }}
        >
          clear Error UserName
        </button> */}
      </form>
    </div>
  );
}
