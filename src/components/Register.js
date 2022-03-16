import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterImage from "../images/register_image.jpg";
import { useAuth } from "../contexts/AuthContext";
import { updateProfile, getAuth } from "firebase/auth";

function Register() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signUp } = useAuth();
  const auth = getAuth();
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (userDetails.password === userDetails.confirmPassword) {
      console.log("Password Match");
      console.log(user);

      try {
        await signUp(userDetails.email, userDetails.password)
          .then((result) => {
            console.log(result.user);
            console.log("Successful SignUp");
            navigate("/login");
          })
          .catch((error) => {
            console.log(error.message);
          });
      } catch (error) {
        setError(error.message);
      }

      console.log(auth.currentUser);

      updateProfile(auth.currentUser, {
        displayName: userDetails.firstName,
      })
        .then(() => {
          // Profile updated!
          console.log("Profile Updated");
        })
        .catch((error) => {
          // An error occurred
          console.log(error.message);
        });

      setUserDetails({
        firstName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      console.log("Password doesn't Match");
      return setPasswordError("Password doesn't match");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevUserDetails) => {
      return {
        ...prevUserDetails,
        [name]: value,
      };
    });

    console.log(value);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img
            src={RegisterImage}
            alt="register img"
            width="600"
            height="700"
          />
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Enter your name, email and Password to Register or Login if you
            already have an account
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 font-semibold">
          <div className="card-body">
            <form className="form-control" onSubmit={handleSubmit}>
              <label className="label">
                <span className="label-text">Firstname</span>
              </label>
              {error && (
                <div className="text-red-500">
                  <p>{error}</p>
                </div>
              )}
              {passwordError && (
                <div className="text-red-500">
                  <p>{passwordError}</p>
                  {/* {alert(passwordError)} */}
                </div>
              )}
              <input
                type="text"
                placeholder="Firstname"
                name="firstName"
                value={userDetails.firstName}
                onChange={handleChange}
                className="input input-bordered hover:shadow-md transition duration-500"
              />
              <label className="label">
                <span className="label-text">Lastname</span>
              </label>
              <input
                type="text"
                placeholder="Lastname"
                name="lastName"
                value={userDetails.lastName}
                onChange={handleChange}
                className="input input-bordered hover:shadow-md transition duration-500"
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                className="input input-bordered hover:shadow-md transition duration-500"
              />
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                value={userDetails.password}
                onChange={handleChange}
                className="input input-bordered hover:shadow-md transition duration-500"
              />
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                name="confirmPassword"
                value={userDetails.confirmPassword}
                onChange={handleChange}
                className="input input-bordered hover:shadow-md transition duration-500"
              />
              <button
                className="btn btn-primary bg-[#0C2B50] hover:bg-[#315072] 
                transition duration-500 hover:scale-110 mt-6"
                type="submit"
              >
                Register
              </button>
            </form>

            <p>
              Already have an account?
              <Link to="/login" className=" text-blue-600 mt-2 italic pl-2">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
