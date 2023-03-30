import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = createAsyncThunk(
  "userSlice/getUsers",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(BASE_URL);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const postPost = createAsyncThunk(
  "userSlice/postUser",
  async (user, thunkApi) => {
    try {
      const { data } = await axios.post(BASE_URL, user);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
