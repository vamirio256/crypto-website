import React from 'react'
import { InputHTMLAttributes } from 'react';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    formik:any;
    placeholder:string;
    label?: string;
    type:string;
    value:any;
    error: Boolean |undefined;
    errorText:string | undefined;

  }
  

export const InputField = ({ name, formik, label, placeholder, type,value, error , errorText}: InputFieldProps) => {
  return (
    <div className="form__group">
    <div className="form__group-title">
      <label>{label}</label>
      {error && (
        <span>{errorText}</span>
      )}
    </div>
    <div className="form__group-input">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={value}
      />
    </div>
  </div>
  )
}
