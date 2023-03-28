import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos/1";

export const getUsers = createAsyncThunk(
  "userSlice/getUsers",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(BASE_URL);
      console.log("data", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
