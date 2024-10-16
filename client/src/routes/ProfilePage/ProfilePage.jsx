import React, { useContext, useEffect } from "react";
import "./ProfilePage.scss";
import List from "../../components/List/List";
import Chat from "../../components/Chat/Chat";
import apiRequest from "./../../lib/apiRequest";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const ProfilePage = () => {
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar: <img src={currentUser.avatar || "noavatar.jpg"} />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-maill: <b>{currentUser.email}</b>{" "}
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>

          <div className="title">
            <h1>My List</h1>
            <Link to={"/add"}> 
            <button>Add New Post</button>
            </Link>
          </div>

          <List />

          <div className="title">
            <h1>Saved List</h1>
          </div>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
