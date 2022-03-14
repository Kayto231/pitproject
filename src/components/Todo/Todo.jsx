import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../index.scss";

import {
  getFromBackEndTasks,
  removeTaskFromState,
  addTaskToState,
  changeInputTodo,
  changeDoneState,
  changeEditInput,
  finishEditing,
  removeAllTasks,
} from "../../redux/action/actions";

import { Loading } from "../Loading/Loading";
import Task from "./Task";

const Todo = () => {
  const dispatch = useDispatch();
  // Getting from mock api info to fullfil the todoList app
  useEffect(() => {
    dispatch(getFromBackEndTasks());
  }, []);

  const { tasks, isLoading, input, isEdit, editInput, editObject } =
    useSelector((state) => state.app);

  // Making some states to work with state of todo list app

  return (
    <div className="container_column">
      <div className="tittle">
        <h2>Add your Task</h2>
        <button onClick={() => dispatch(removeAllTasks(tasks))}>
          Remove all
        </button>
      </div>
      <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => dispatch(changeInputTodo(e.target.value))}
        />
        <button
          onClick={() => {
            dispatch(
              addTaskToState(tasks, {
                title: input,
                id: Math.random(),
                isDone: false,
              })
            );
          }}
        >
          Add
        </button>
      </div>
      {isEdit && (
        <div className="editInput">
          <input
            type="text"
            value={editInput}
            onChange={(e) => dispatch(changeEditInput(e.target.value))}
          />
          <button
            onClick={() =>
              dispatch(finishEditing(tasks, editObject, editInput, isEdit))
            }
          >
            Done
          </button>
        </div>
      )}
      {/*Checking if todo list has tasks to be displayed or not */}

      <div className="task__List_Border">
        {tasks.length >= 1 ? (
          tasks.map((obj, i) => {
            return (
              <Task
                key={i}
                title={obj.title}
                id={obj.id}
                isDone={obj.isDone}
                isDoneFunction={(obj) => dispatch(changeDoneState(tasks, obj))}
                // Getting back the id from each separate task from todo list to remove it
                onRemoveFunction={(obj) =>
                  dispatch(removeTaskFromState(tasks, obj))
                }
              />
            );
          })
        ) : isLoading ? (
          <Loading />
        ) : (
          "Nothing is Added"
        )}
      </div>
    </div>
  );
};

export default Todo;
