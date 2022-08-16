import React from 'react'

export interface SelectOption {
    label?: string;
    value: number | string;
  }
  
export interface SelectFieldProps {
    disabled?: boolean;
    options: SelectOption[];
    name: string;
    formik:any;
    label?: string;
    value:any;
    error: Boolean |undefined;
    errorText:string | undefined;
  }
  
export const SelectField = ({ name, formik, label,value, error , errorText, options}: SelectFieldProps) => {
    const handleChangeSelect = (
        e: React.ChangeEvent<HTMLSelectElement>
      ) => {
        formik.setFieldValue(name, e.target.value);
      };
  return (
    <div className="form__group">
            <div className="form__group-title">
              <label>{label}</label>
              {error && (
                <span>{errorText}</span>
              )}
            </div>
            <div className="form__group-input">
              <select
                defaultValue={value}
                onChange={handleChangeSelect}
              >
                  {options.map(item=>{
                      return <option key={item.value} value={item.value}>{item.label}</option>
                  })}
                
              </select>
            </div>
          </div>
  )
}