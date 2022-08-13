import { NavLink } from "react-router-dom";

interface LoginForm {
    title: string,
    placehodler: string,
    type: string
}

const Login = () => {
    return (
        <div className="max-w-[690px] align-middle">
            <div>
                <h3>Login To Rockie</h3>
                <form className=" ">
                    <FormInput
                        title="Email/Id"
                        type="email"
                        placehodler="Please fill in the email from." />
                    <FormInput
                        title="Password"
                        type="password"
                        placehodler="Please enter a password."
                    />
                    <div>
                        <input type={"checkbox"} value="Remember Me" />
                        <NavLink className="text-_error" to="/login">Forgot Password</NavLink>
                    </div>
                    <button className="bg-_blue text-white">Login</button>
                    <div>
                        <p>Not a Member?</p>
                        <NavLink to="/register">Register</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}

const FormInput = (props: LoginForm) => {
    return (
        <div>
            <p>{props.title}</p>
            <input
                placeholder={props.placehodler}
                type={props.type}
            ></input>
        </div>
    )
}

export default Login;