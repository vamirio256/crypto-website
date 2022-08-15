import { NavLink } from "react-router-dom";
import { Formik, useFormik } from "formik";
import lock from "../../assets/images/lock.svg";
import "./style.scss";
import useDarkMode from "../../components/hooks/useDarkMode";

const Login = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <section className="login">
            <aside className="qr--hidden">
                <div className="qr__box"></div>
                <h3 className="qr__title">Login with QR Code</h3>
                <div className="qr__text">
                    <div>
                        <span>Scan this code with the </span>
                        <a className="qr__text__link" href="#">Rockie mobile app</a>
                    </div>
                    <p>to log in instantly</p>
                </div>
            </aside>
            <div className="login__wrapper">
                <div className="login__wrapper__title">
                    <h2 className="login__wrapper__title--big">Login To Rockie</h2>
                    <p className="login__w">Welcome back! Log In now to start trading</p>
                </div>
                <div className="login__wrapper__link">
                    <div className="login__wrapper__link__icon">
                        <img src={lock} />
                    </div>
                    <div className="login__wrapper__link__text">
                        <a className="login__wrapper__link__text--bold"
                            href="https://accounts.rockie.com/login">
                            <span className="text-_green ">https://</span>
                            <span>accounts.rockie.com/login</span>
                        </a>
                    </div>
                </div>
                <div className="login__wrapper__options">
                    <button className="login__wrapper__options--toggle">Email</button>
                    <button
                        className="login__wrapper__options--untoggle"
                        onClick={toggleDarkMode}
                    >Mobile</button>
                </div>
                <form className="form" onSubmit={formik.handleSubmit}>
                    <div className="form__group">
                        <h4 className="form__group__title--bold">Email/ID</h4>
                        <input
                            className="form__group__input"
                            type="email"
                            placeholder="Please fill in the email from."
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>
                    <div className="form__group">
                        <h4 className="form__group__title--bold">Password</h4>
                        <input
                            className="form__group__input"
                            type="Password"
                            placeholder="Please enter a password."
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="form__checkbox">
                        <label><input className="form__checkbox__remember" type={"checkbox"} />Remember me</label>
                        <NavLink className="form__checkbox__forgot" to="/login">Forgot Password</NavLink>
                    </div>
                    <button
                        className="form__submit"
                        type="submit"
                    >
                        Login
                    </button>
                    <div className="form__register">
                        <span>Not a Member? </span>
                        <NavLink className="form__register__link" to="/register">Register</NavLink>
                    </div>
                </form>
            </div>
            <aside className="qr">
                <div className="qr__box"></div>
                <h3 className="qr__title">Login with QR Code</h3>
                <div className="qr__text">
                    <div>
                        <span>Scan this code with the </span>
                        <a className="qr__text__link" href="#">Rockie mobile app</a>
                    </div>
                    <p>to log in instantly</p>
                </div>
            </aside>
        </section>
    )
}

export default Login;