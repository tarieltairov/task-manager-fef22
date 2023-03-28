import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/action";

const initialState = {
  users: [],
  count: 0,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    minus: (state) => {
      state.count = state.count - 1;
    },
    plus: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.users = [action.payload];
    });
  },
});

export const { minus, plus } = userSlice.actions;
export default userSlice.reducer;
