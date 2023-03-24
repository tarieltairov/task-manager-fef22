import axios from "axios";
import { getTodos } from "../actionCreator/todosActionCreator";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const getAllTodos = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(BASE_URL);
      dispatch(getTodos(data));
      return data;
    } catch (error) {
      console.log("error", error);
    }
  };
};
