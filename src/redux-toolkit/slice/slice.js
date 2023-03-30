import { createSlice } from "@reduxjs/toolkit";
import { getPosts, postPost } from "../actions/action";

const initialState = {
  posts: null,
  count: 0,
  loading: false,
  error: false,
};

const postsSlice = createSlice({
  name: "postsSlice",
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
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.posts = action.payload;
    });

    builder.addCase(postPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(postPost.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.posts.unshift(action.payload);
    });
  },
});

export const { minus, plus } = postsSlice.actions;
export default postsSlice.reducer;
