import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.scss";
import {
  addToCounter,
  changeInput,
  removeFromCounter,
  resetCounter,
} from "../../redux/action/actions";
import { Coffee } from "../Coffee/Coffee";
import Todo from "../Todo/Todo";

const Main_Page = () => {
  const dispatch = useDispatch();
  const { counter, input } = useSelector((state) => state.todo);

  return (
    <div className="main__row">
      <div className="main__firstContainer">
        <img src="./images/logo3.jpg" alt="logo" />
        <Coffee />
      </div>
    </div>
  );
};

export default Main_Page;
