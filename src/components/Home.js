import React from "react";
import { Link } from "react-router-dom";
// import Login from "./Login";

function Home() {
  return (
    <div className=" min-h-screen bg-white">
      <div className="hero min-h-screen bg-[url('./images/MetroTeam2.jpg')] bg-contain bg-no-repeat bg-white">
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
            <p className="mb-5">
              This is the first Workflow Approval Application built to start
              with the Sales Department .
            </p>
            <Link to="/register">
              <button className="btn bg-[#0C2B50] hover:scale-105 transition duration-300">
                Get Started
              </button>
            </Link>
            <p>
              <Link to="/login">
                <button className="btn bg-[#0C2B50] hover:scale-105 transition duration-300 btn-sm mt-2">
                  Login
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
