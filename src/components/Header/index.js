import React, { useEffect } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import userSvg from "../../assets/user.svg";
function Header() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  function logout() {
    auth.signOut();
    navigate("/");
  }

  useEffect(() => {
    if (!user) {
      document.title = "PocketMate";
    } else {
      document.title = "PocketMate | Dashboard";
    }
  }, [user, navigate]);

  return (
    <div className="navbar">
      <p className="navbar-heading">
        <img src={process.env.PUBLIC_URL + '/fav32.png'} alt="Logo" className="logo" />
        PocketMate
      </p> 
        {user ? (
        <p className="navbar-link" onClick={logout}>
          <span style={{ marginRight: "1rem" }}>
            <img
              src={user.photoURL ? user.photoURL : userSvg}
              width={user.photoURL ? "32" : "24"}
              style={{ borderRadius: "50%" }}
            />
          </span>
          Logout
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
