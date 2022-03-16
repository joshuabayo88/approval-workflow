import React from "react";
import { useAuth } from "../contexts/AuthContext";
import ProfileImage from "../images/MetroTeam.jpg";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";

const auth = getAuth();
// const userDisplayName = auth.currentUser.displayName;

function Profile() {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  console.log(auth.currentUser.email);
  // console.log();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  // const handleApply = () => {};

  return (
    <div className=" flex bg-gray-300 items-center justify-center">
      <div className="card w-96 bg-base-100 card-compact shadow-xl h-auto">
        <figure>
          <img
            src={ProfileImage}
            alt="Shoes"
            height="100"
            width="300"
            className="rounded-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Welcome</h2>
          <h1 className="card-title">{auth.currentUser.displayName}</h1>
          <p>
            You can apply for approvals by clicking on the Apply Now button or
            log out of the Application by clicking on the sign out button
          </p>
          <div className="justify-end card-actions">
            <button
              className="btn btn-sm bg-[#0C2B50] hover:bg-[#315072] 
                transition duration-500 hover:scale-110"
              onClick={handleLogOut}
            >
              Sign Out
            </button>
            <Link to="/application">
              <button
                className="btn btn-sm bg-[#0C2B50] hover:bg-[#315072] 
                transition duration-500 hover:scale-110"
                // onClick={handleApply}
              >
                Apply Now
              </button>
            </Link>
            <button
              className="btn bg-[#0C2B50] hover:bg-[#315072] 
                transition duration-500 hover:scale-110 btn-sm"
              //   onClick={}
            >
              View Applications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
