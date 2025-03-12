import { useNavigate } from "react-router-dom";
import Navv from "../header/Navbar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addUserThunk } from "../../../store/userStore";

const Sign = () => {
  const usrsData = useSelector((state) => state.usersData.users || [])
  console.log("usressss ", usrsData);
  const dispatch = useDispatch()
  const navgete = useNavigate()

  const loginPage = () => {
    navgete("/login");
  }

  const { register, handleSubmit, formState, watch, reset } = useForm()
  const { errors } = formState
  const [paswword, confirmPassword] = watch(["Password", "confirmPassword"])

  const onSubmit = (data) => {
    if (!usrsData.some((usr) => usr.email == data.email)) {
      dispatch(addUserThunk(data));
      reset();
      navgete("/login");
    }
    else {
      alert("email is exist");
    }
    alert("successful form submission");
  }

  return (
    <>
      <Navv />
      <div className="register-form w-75 m-auto mt-5" >
        <h2 className="form-title text-center">Sign Up</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your full name" {...register("fullName", {
              required: {
                value: true,
                message: "full Name is required"
              },
              minLength: {
                value: 3,
                message: "at least 3 characters"
              }
            })} />
            <h5 className="mt-3 text-danger">
              {errors.fullName?.message}
            </h5>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email address" {...register("email", {
              required: {
                value: true,
                message: "email is required"
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "invalid email formate"
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
                message: "full Name is required"
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: "Minimum eight characters, at least one letter and one number:"
              }
            })} />
            <h5 className="mt-3 text-danger">
              {errors.Password?.message}
            </h5>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Re-enter your password" {...register("confirmPassword",
              {
                required: {
                  value: true,
                  message: "confirm Password is required"
                },
                validate: value => value === paswword || "Passwords do not match"
              }
            )} />
            <h5 className="mt-3 text-danger">
              {errors.confirmPassword?.message}
            </h5>
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <select className="form-control" id="subject"{...register("subject",
              {
                required: {
                  value: true,
                  message: "Subject is required"
                }
              })} >
              <option value="">Select a subject</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="js">JavaScript</option>
            </select>
            <h5 className="mt-3 text-danger">{errors.subject?.message}</h5>
          </div>
          <div className="mb-3">
            <label htmlFor="Message" className="form-label">Message : </label>
            <input type="text" className="form-control" id="Message" placeholder="Message" {...register("message", {
              required: {
                value: true,
                message: "full Name is required"
              },
              minLength: {
                value: 10,
                message: "minimum 10 characters"
              }
            })} />
            <h5 className="mt-3 text-danger">
              {errors.message?.message}
            </h5>
          </div>
          <div className="mb-3">
            <label htmlFor="Phone Number" className="form-label">Phone Number</label>
            <input type="number" className="form-control" id="Phone Number" placeholder="Phone Number" {...register("phoneNumber", {
              pattern: {
                value: /^01(0|1|2|5)\d{8}$/,
                message: "not valid phone number"
              }
            })} />
            <h5 className="mt-3 text-danger">
              {errors.phoneNumber?.message}
            </h5>
          </div>
          <button type="submit" onClick={handleSubmit(onSubmit)} className="btn btn-primary ">  <i className="fa-solid fa-user-plus me-2"></i> Sign Up</button>
          <button type="button" className="btn btn-info mx-2" onClick={() => reset()}> <i className="fa-solid fa-rotate-right me-2"></i> Reset</button>
        </form>
        <div className="text-center mt-3 ">
          <a onClick={() => loginPage()} className="text-decoration-none ">Already have an account? Log in</a>
        </div>
        <br />
      </div>
    </>
  )
}

export default Sign;