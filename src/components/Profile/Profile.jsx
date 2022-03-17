import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { user, isAdmin } = useSelector((state) => state.login);
  console.log(user, isAdmin);
  return (
    <div className="profile_Page_Border">
      <div className="profile_Page_Info">
        <div className="profile_Page_Name">
          <span>Name: {user}</span>
          <span>Admin: {isAdmin ? "Yes" : "No"}</span>
        </div>
        {isAdmin === true ? (
          <div className="profile_Page_Admin">
            <div className="nav_To_Admin">
              <Link to={"/admin"}>Admin</Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
