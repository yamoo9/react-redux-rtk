import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';

const initialState = {
  entities: [],
  loading: false,
};

const ENTRYPOINT = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = createAsyncThunk('posts/getPosts', async (thunkAPI) => {
  const res = await fetch(ENTRYPOINT).then((data) => data.json());
  return res;
});

export const addPost = createAsyncThunk(
  'posts/addPost',
  async (post, { rejectWithValue }) => {
    try {
      const response = await fetch(ENTRYPOINT, {
        method: 'POST',
        body: JSON.stringify(post),
        header: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
    },
    [addPost.rejected]: (state, action) => {
      console.error(action.payload);
    },
  },
});

export default postSlice.reducer;

export const selectPosts = createSelector(
  (state) => state.posts,
  (posts) => posts
);
