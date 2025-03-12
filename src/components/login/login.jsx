import { useNavigate } from "react-router-dom";
import Navv from "../header/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Userlogin } from "../../../store/userAuthStore";

const Login = () => {
    // const Userlogin = useSelector((state) => state.userAuth);
    const isUserAuth = useSelector((state) => state.userAuth.Auth);
    console.log("isUserAuth", isUserAuth);

    const dispatch = useDispatch()
    const navgete = useNavigate()
    const usrsData = useSelector((state) => state.usersData.users || [])

    const { register, handleSubmit, formState, reset } = useForm()
    const { errors } = formState


    console.log("usressss ", usrsData);
    const registrationPage = () => {
        navgete("/registration");
    }
    const onSubmit = (data) => {
        if (usrsData.some((usr) => usr.email == data.email && usr.Password == data.Password)) {
            localStorage.setItem("userAuth", JSON.stringify(data));
            dispatch(Userlogin())
            navgete("/Home");
            reset();
        }
        else {
            alert("invalid email or Password");
        }
    }
    return (
        <>
            <Navv />
            <div className="login-form w-75 m-auto mt-5">
                <h2 className="form-title text-center">Login</h2>
                <form className="mt-4">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email address" {...register("email", {
                            required: {
                                value: true,
                                message: "email is required"
                            }
                        })} />
                        <h5 className="mt-3 text-danger">
                            {errors.email?.message}
                        </h5>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password" {...register("Password", {
                            required: {
                                value: true,
                                message: "password is required"
                            }
                        })} />
                        <h5 className="mt-3 text-danger">
                            {errors.Password?.message}
                        </h5>
                    </div>
                    <button type="submit" onClick={handleSubmit(onSubmit)} className="btn btn-primary ">  <i className="fa-solid fa-user-plus me-2"></i>log in</button>
                </form>
                <div className="text-center mt-3">
                    <a onClick={() => registrationPage()} className="text-decoration-none">Don't have an account? Sign up now</a>
                </div>
            </div>
        </>
    )
}

export default Login;