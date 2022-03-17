import axios from "axios";
import { ERROR_WHILE_LOGGING, LOAD_ALL_USERS, LOGED_IN_STATE } from "../consts";

export const isLogedInAction = (obj) => ({
  type: LOGED_IN_STATE,
  payload: obj,
});
export const errorWhileLoggingAction = (e) => ({
  type: ERROR_WHILE_LOGGING,
  payload: e,
});

export const loadAllUsersAction = (e) => ({
  type: LOAD_ALL_USERS,
  payload: e,
});

export const checkIsAuthFunction = () => {
  return (dispatch) => {
    let isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    let isLogedIn = JSON.parse(localStorage.getItem("isLogedIn"));
    let user = localStorage.getItem("user");
    console.log(isAdmin);
    // console.log(isAdmin, isLogedIn, user);

    dispatch(
      isLogedInAction({
        isLogedIn,
        user,
        isAdmin,
      })
    );
  };
};
export const isLogedInFunction = (obj) => {
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        const isAuthorized = obj.allUsers.filter(
          (el) => el.login === obj.login && el.pass === obj.pass
        );

        const [isAdmin] = isAuthorized.map((el) => el.isAdmin);

        if (isAuthorized.length > 0) {
          dispatch(throwErrorFunction(false, ""));
          dispatch(
            isLogedInAction({
              isLogedIn: true,
              user: obj.login,
              isAdmin: isAdmin,
            })
          );
          console.log(isAdmin);
          localStorage.setItem("isAdmin", isAdmin);
          localStorage.setItem("isLogedIn", "true");
          localStorage.setItem("user", obj.login);

          return resolve(true);
        } else {
          dispatch(throwErrorFunction(true, "Incorrect Login or Password"));
          return resolve(false);
        }
      } catch (e) {
        reject(e);
        console.log(e);
      }
    });
  };
};

export const throwErrorFunction = (isError, e) => {
  return (dispatch) => {
    dispatch(errorWhileLoggingAction({ isError, errorMessage: e }));
  };
};

export const loadAllUsersFunction = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://6153b0673f4c4300171593fc.mockapi.io/todo"
    );

    const authInfo = response.data.map((el) => el.userInfo);

    dispatch(loadAllUsersAction(authInfo));
  };
};
