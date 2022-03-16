import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../images/login_image.jpg";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(user.email, user.password);
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    }

    setUser({
      firstName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={LoginImage} alt="register img" width="600" height="300" />
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Enter your email and Password to Login or Register if you do not
            have an account yet
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form className="form-control" onSubmit={handleSubmit}>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              {error && (
                <div className="text-red-500">
                  <p>{error}</p>
                </div>
              )}
              <input
                type="text"
                placeholder="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="input input-bordered hover:shadow-md transition duration-500"
              />
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="input input-bordered hover:shadow-md transition duration-500"
              />
              <button
                className="btn btn-primary bg-[#0C2B50] hover:bg-[#315072] 
                transition duration-500 hover:scale-110 mt-6"
                // onClick={handleSubmit}
              >
                Login
              </button>
            </form>

            <p>
              Don't have an account?
              <Link to="/register" className=" text-blue-600 mt-2 italic pl-2">
                Signup now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
