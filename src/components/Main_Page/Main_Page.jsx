import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.scss";
import {
  addToCounter,
  changeInput,
  removeFromCounter,
  resetCounter,
} from "../../redux/action/actions";
import Todo from "../Todo/Todo";

const Main_Page = () => {
  const dispatch = useDispatch();
  const { counter, input } = useSelector((state) => state.todo);

  return (
    <div className="main__row">
      <div className="main__firstContainer">
        <p>First</p>
        <div className="counter">
          <p>Counter</p>
          <div className="btns">
            <button onClick={() => dispatch(addToCounter(counter))}>Add</button>
            <button onClick={() => dispatch(removeFromCounter(counter))}>
              Decrease
            </button>
            <button onClick={() => dispatch(resetCounter())}>Reset</button>
          </div>
        </div>
        <div className="input">
          <input
            type="text"
            value={input}
            onChange={(e) => dispatch(changeInput(e.target.value))}
          />
        </div>
        <Todo />
      </div>
      <div className="center"></div>
      <div className="main__secondContainer">
        <p>Ваши данные</p>
        <div className="counter">Current counter: {counter}</div>
        <div className="input">{input}</div>
      </div>
    </div>
  );
};

export default Main_Page;
