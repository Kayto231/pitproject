import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.scss";
import { editFunction } from "../../redux/action/actions";

const Task = ({ title, id, isDone, isDoneFunction, onRemoveFunction }) => {
  //   console.log(isDone);

  const dispatch = useDispatch();
  const { isEdit } = useSelector((state) => state.app);
  return (
    <div className="tasks_column">
      <div className={isDone ? "task done" : " task unDone"}>{title}</div>
      <div className="btns">
        {isDone ? (
          <button onClick={() => isDoneFunction({ title, id, isDone })}>
            UN
          </button>
        ) : (
          <button onClick={() => isDoneFunction({ title, id, isDone })}>
            D
          </button>
        )}
        <button
          onClick={() => {
            dispatch(editFunction(isEdit, { title, id, isDone }));
          }}
        >
          E
        </button>

        <button onClick={() => onRemoveFunction({ title, id, isDone })}>
          R
        </button>
      </div>
    </div>
  );
};

export default Task;
