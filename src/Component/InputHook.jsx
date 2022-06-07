import { TextField } from "@mui/material";
import React, { useEffect } from "react";
import { Controller, useController } from "react-hook-form";

const InputHook = ({ control, errors, ...props}) => {
  console.log("control", errors);
  // const { field } = useController({
  //   control,
  //   name: name,
  //   defaultValue: "",
  // });
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name: props.name,
    control,
    rules: { required: true },
    defaultValue: "",
  });
  // useEffect(() => {
  //   console.log("field", field);
  // }, [field]);
  return (
  
        <TextField
          onBlur={onBlur} // notify when input is touched
          onChange={onChange} // send value to hook form
          checked={value}
          inputRef={ref}
          value={value}
          error
          defaultValue="Hello World"
          helperText={errors && errors.message}
          variant="standard"
        />
 
    // <input
    //   className="p-4 border border-gray-100 rounded-lg bg-white outline-none transition-all focus:border-blue-500"
    //   {...field}
    //   {...props}
    // ></input>
  );
};

export default InputHook;
