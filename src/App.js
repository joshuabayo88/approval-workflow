import MetroLogo from "./images/metrologo.png";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import PrivateRoute from "./components/PrivateRoute";
import Application from "./components/Application";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div>
      <header
        className="py-2 h-13 bg-gradient-to-bl from-[#0C2B50] to-[#BDDFF4] sticky
      top-0 flex justify-between"
      >
        <Link to="/">
          <img
            src={MetroLogo}
            alt="Metro Logo"
            height="130"
            width="150"
            className=" animate-bounce"
          />
        </Link>
      </header>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/application"
            element={
              <PrivateRoute>
                <Application />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
