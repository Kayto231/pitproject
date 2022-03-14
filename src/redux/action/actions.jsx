import axios from "axios";
import {
  ADD_COUNTER,
  CHANGE_INPUT,
  REMOVE_COUNTER,
  REMOVE_TASK,
  RESET_COUNTER,
  SET_TODOLIST,
  ADD_TASK,
  ADD_INPUT_TASK,
  RESET_INPUT,
  REMOVE_ALL,
  CHANGE_DONE_STATE,
  IS_EDIT_STATE,
  CHANGE_EDIT_INPUT,
  EDIT_IS_DONE,
} from "../consts";

//Reducer.jsx
//ActionCreator
export const addToCounter = (counter) => ({
  type: ADD_COUNTER,
  payload: counter + 1,
});
export const removeFromCounter = (counter) => ({
  type: REMOVE_COUNTER,
  payload: counter - 1,
});
export const resetCounter = () => ({ type: RESET_COUNTER, payload: 0 });
export const changeInput = (text) => ({ type: CHANGE_INPUT, payload: text });

// todoReducer.jsx

//ActionCreator
export const setTasksToReducer = (tasks) => ({
  type: SET_TODOLIST,
  payload: tasks,
});
export const removeTaskFromList = (tasks) => ({
  type: REMOVE_TASK,
  payload: tasks,
});
export const addTaskToList = (tasks) => ({ type: ADD_TASK, payload: tasks });

export const changeInputTodo = (text) => ({
  type: ADD_INPUT_TASK,
  payload: text,
});
export const resetInput = () => ({ type: RESET_INPUT, payload: "" });
export const removeAll = () => ({ type: REMOVE_ALL, payload: [] });

export const changeDoneTask = (tasks) => ({
  type: CHANGE_DONE_STATE,
  payload: tasks,
});

export const changeIsEditState = (state) => ({
  type: IS_EDIT_STATE,
  payload: state,
});

export const changeEditInput = (text) => ({
  type: CHANGE_EDIT_INPUT,
  payload: text,
});

export const editIsDone = (tasks) => ({ type: EDIT_IS_DONE, payload: tasks });
//Functions |||||||||||||||||||||||||||||||||
export const getFromBackEndTasks = () => {
  return async (dispatch) => {
    const itemResponse = await axios.get(
      "https://6153b0673f4c4300171593fc.mockapi.io/todo"
    );
    dispatch(setTasksToReducer(itemResponse.data));
  };
};

export const removeTaskFromState = (tasks, obj) => {
  return async (dispatch) => {
    const finalTaskArray = tasks.filter((el) => el.id !== obj.id);
    dispatch(removeTaskFromList(finalTaskArray));
    await axios.delete(
      `https://6153b0673f4c4300171593fc.mockapi.io/todo/${obj.id}`
    );
  };
};

export const addTaskToState = (tasks, obj) => {
  return async (dispatch) => {
    dispatch(resetInput());
    dispatch(addTaskToList([...tasks, obj]));
    await axios.post("https://6153b0673f4c4300171593fc.mockapi.io/todo", obj);
  };
};

export const changeDoneState = (tasks, obj) => {
  return async (dispatch) => {
    tasks
      .filter((el) => el.id === obj.id)
      .map((el) => (el.isDone = !el.isDone));

    dispatch(changeDoneTask(tasks));
    await axios.put(
      `https://6153b0673f4c4300171593fc.mockapi.io/todo/${obj.id}`,
      { title: obj.title, id: obj.id, isDone: !obj.isDone }
    );
  };
};

export const editFunction = (isEdit, obj) => {
  return (dispatch) => {
    dispatch(changeIsEditState({ isEdit: !isEdit, obj: obj }));
  };
};

export const finishEditing = (tasks, editObject, editInput, isEdit) => {
  return async (dispatch) => {
    tasks
      .filter((el) => el.id === editObject.id)
      .map((el) => (el.title = editInput));

    dispatch(changeIsEditState(isEdit));
    dispatch(editIsDone(tasks));
    await axios.put(
      `https://6153b0673f4c4300171593fc.mockapi.io/todo/${editObject.id}`,
      { title: editInput, id: editObject.id, isDone: editObject.isDone }
    );
  };
};

export const removeAllTasks = (tasks) => {
  return async (dispatch) => {
    await tasks.map((el) => {
      axios.delete(`https://6153b0673f4c4300171593fc.mockapi.io/todo/${el.id}`);
    });
    dispatch(removeAll());
  };
};
