import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  isLogedInFunction,
  throwErrorFunction,
} from "../../redux/action/login_actions";

export const Login_Page = () => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const { allUsers, isError, errorMessage, isLogedIn } = useSelector(
    (state) => state.login
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(throwErrorFunction(false, ""));
  }, []);

  return (
    <div className="login_Page_Border">
      <div className="login_From_Auth">
        <div className="login_Page_Error">{isError ? errorMessage : null}</div>
        <h2>Your login</h2>
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <h2>Your password</h2>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button
          onClick={async () => {
            const response = await dispatch(
              isLogedInFunction({
                allUsers: allUsers,
                pass,
                login,
              })
            );

            setLogin("");
            setPass("");
            if (response === true) navigate("/");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};
