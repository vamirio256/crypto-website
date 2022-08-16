import React, { useState } from "react";
import images from "../../assets/images";
import { useFormik } from "formik";
import * as Yup from "yup";
import useDarkMode from "../../components/hooks/useDarkMode";
import "./Register.scss";
import { InputField, SelectField } from "../../components/FormFields";
import { useNavigate } from "react-router-dom";
type Props = {};
const data = [
  { label: "South Korea (+82)", value: "sk" },
  { label: "Viet Nam (+84)", value: "vi" },
];
const Register = (props: Props) => {
  const navigate = useNavigate()
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmShown, setPasswordConfirmShown] = useState<any>(false);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
      nickName: "",
      country: "vi",
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
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePasswordCofirmVisiblity = () => {
    setPasswordConfirmShown(!passwordConfirmShown);
  };
  return (
    <>

      <section className="register">
        <div className="register__header">
          <h5 className="text-[40px] font-bold text-[#23262F]">Register</h5>
          <div className="register__header-breadcrumb">
            <span className="text-lg text-[#777E90]">Home</span>
            <span className="text-lg text-[#777E90]">Register</span>
          </div>
        </div>
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
              <div className="form__group-input">
                <input
                  type={"text"}
                  placeholder="Please fill in the email form."
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <button>Authenticate</button>
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
            <InputField
              name="nickName"
              label="NickName"
              formik={formik}
              placeholder="Enter Email"
              type="text"
              value={formik.values.nickName}
              error={formik.touched.nickName && Boolean(formik.errors.nickName)}
              errorText={formik.errors.nickName}
            />

            <SelectField
              name="country"
              formik={formik}
              label="Country"
              value={formik.values.country}
              error={formik.touched.country && Boolean(formik.errors.country)}
              errorText={formik.errors.country}
              options={data}
            />

            <InputField
              name="phone"
              label="Phone"
              formik={formik}
              placeholder="ex) 01012345678 (without '-')"
              type="tel"
              value={formik.values.phone}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              errorText={formik.errors.phone}
            />
            <InputField
              name="code"
              label="UID Code"
              formik={formik}
              placeholder="Please enter your invitation code."
              type="text"
              value={formik.values.code}
              error={formik.touched.code && Boolean(formik.errors.code)}
              errorText={formik.errors.code}
            />

            <button type="submit" className="form__group-button">
              Pre-Registration
            </button>
          </form>
          <p className="text-[16px] font-medium text-[#23262F] mt-6 dark:text-[#B1B5C3]">
            Already have an account?
            <span onClick={()=>navigate("/login")} className="text-[16px] font-bold text-[#3772FF] cursor-pointer ml-1">
              Login
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Register;
