import React, { useState } from "react";
import images from "../../assets/images";
import { useFormik } from "formik";
import * as Yup from "yup";
import useDarkMode from "../../components/hooks/useDarkMode";
import "./Register.scss";

type Props = {};

const Register = (props: Props) => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmShown, setPasswordConfirmShown] = useState<any>(false);
  console.log(toggleDarkMode);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
      nickName: "",
      country: "HA",
      phone: "",
      code: "",
    },
    validationSchema: Yup.object({
      code: Yup.string().required("(Please enter a valid code!)"),
      phone: Yup.string()
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "(Phone number is not valid)"
        )
        .required("(Please enter a valid phone number!)"),
      email: Yup.string()
        .email("(Invalid email format)")
        .required("(Please enter a valid email!)"),
      nickName: Yup.string()
        .email("(Invalid nickname format)")
        .required("(Please enter a valid nickname!)"),
      password: Yup.string()
        .required("(Please enter a valid password!)")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "(8 or more characters, including numbers and special characters)"
        ),

      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Please enter a valid confirm password!"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
    },
  });
  const handleChangeSelectCountry = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    formik.setFieldValue("country", e.target.value);
  };
  const togglePasswordVisiblity = () => {
    // setPasswordShown(passwordShown ? false : true);
    setPasswordShown(!passwordShown);
  };
  const togglePasswordCofirmVisiblity = () => {
    // setPasswordShown(passwordShown ? false : true);
    setPasswordConfirmShown(!passwordConfirmShown);
  };
  return (
    <section className="register">
      <div className="register__wrapper ">
        <h3 className="register__wrapper-title">Register To Rockie</h3>
        <p className="register__wrapper-title__sm ">
          Register in advance and enjoy the event benefits
        </p>
        <div className="register__wrapper-buttons ">
          <button className="button primary">Email</button>
          <button onClick={toggleDarkMode} className="button outline">
            Mobile
          </button>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="register__wrapper__form "
        >
          <div className="form__group ">
            <div className="form__group-title">
              <label className="">Email/ID</label>
              {formik.errors.email && formik.touched.email && (
                <span>{formik.errors.email}</span>
              )}
            </div>
            <div className="form__group-input ">
              <input
                type={"text"}
                placeholder="Please fill in the email form."
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <button >
                Authenticate
              </button>
            </div>
          </div>
          <div className="form__group">
            <div className="form__group-title">
              <label htmlFor="Password">Password </label>
              {formik.errors.password && formik.touched.password && (
                <span>{formik.errors.password}</span>
              )}
              {!formik.errors.password &&
                formik.errors.confirm_password &&
                formik.touched.confirm_password && (
                  <span>{formik.errors.confirm_password}</span>
                )}
            </div>
            <div className="form__group-input">
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Please enter a password."
                className=""
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <img
                onClick={() => togglePasswordVisiblity()}
                className="eye"
                src={images.eyeShow}
                alt="eyeShow"
              />
            </div>
            <div className="form__group-input">
              <input
                type={passwordConfirmShown ? "text" : "password"}
                placeholder="Please re-enter your password."
                name="confirm_password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.confirm_password}
              />
              <img
                onClick={() => togglePasswordCofirmVisiblity()}
                className="eye"
                src={images.eyeShow}
                alt="eyeShow"
              />
            </div>
          </div>
          <div className="form__group">
            <div className="form__group-title">
              <label>NickName</label>
              {formik.errors.nickName && formik.touched.nickName && (
                <span>{formik.errors.nickName}</span>
              )}
            </div>
            <div className="form__group-input">
              <input
                type={"text"}
                placeholder="Enter Email"
                name="nickName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.nickName}
              />
            </div>
          </div>
          <div className="form__group">
            <div className="form__group-title">
              <label>Country</label>
              {formik.errors.country && formik.touched.country && (
                <span>{formik.errors.country}</span>
              )}
            </div>
            <div className="form__group-input">
              <select
                defaultValue={formik.values.country}
                onChange={handleChangeSelectCountry}
              >
                <option value="HA">South Korea (+82)</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div className="form__group">
            <div className="form__group-title">
              <label>Phone</label>
              {formik.errors.phone && formik.touched.phone && (
                <span>{formik.errors.phone}</span>
              )}
            </div>
            <div className="form__group-input">
              <input
                type={"tel"}
                placeholder="ex) 01012345678 (without '-')"
                name="phone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
            </div>
          </div>
          <div className="form__group">
            <div className="form__group-title">
              <label>UID Code</label>
              {formik.errors.code && formik.touched.code && (
                <span>{formik.errors.code}</span>
              )}
            </div>
            <div className="form__group-input">
              <input
                type={"tex"}
                placeholder="Please enter your invitation code."
                name="code"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.code}
              />
            </div>
          </div>
          <button className="form__group-button">Pre-Registration</button>
        </form>
        <p className="text-[16px] font-medium text-[#23262F] mt-6 dark:text-[#B1B5C3]">
          Already have an account?
          <span className="text-[16px] font-bold text-[#3772FF] cursor-pointer ml-1">
            Login
          </span>
        </p>
      </div>
    </section>
  );
};

export default Register;
