import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';

export const fetchBeverageList = createAsyncThunk(
  'beverage-list/fetch',
  async () => {
    const { data } = await axios('/beverage-menu');
    return data;
  }
);

export const fetchBeverageItem = createAsyncThunk(
  'beverage-item/fetch',
  async (id) => {
    const { data } = await axios(`/beverage-menu/${id}`);
    return data;
  }
);

export const fetchSearchBeverage = createAsyncThunk(
  'search-baverage/fetch',
  async (query) => {
    const { data } = await axios.get(`/beverage-menu?q=${query}`);
    return data;
  }
);

/* create slice ------------------------------------------------------------- */

const slice = createSlice({
  name: 'beverageList',
  initialState: {
    loading: true,
    error: null,
    list: null,
    item: null,
  },
  extraReducers: (builder) => {
    const pendingCallback = (state) => {
      state.loading = true;
    };

    const rejectedCallback = (state, action) => {
      state.loading = false;
      state.error = action.payload;
    };

    builder
      .addCase(fetchBeverageList.pending, pendingCallback)
      .addCase(fetchBeverageList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchBeverageList.rejected, rejectedCallback)
      .addCase(fetchBeverageItem.pending, pendingCallback)
      .addCase(fetchBeverageItem.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(fetchBeverageItem.rejected, rejectedCallback)
      .addCase(fetchSearchBeverage.pending, pendingCallback)
      .addCase(fetchSearchBeverage.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchSearchBeverage.rejected, rejectedCallback);
  },
});

export default slice.reducer;

/* custom hooks ------------------------------------------------------------- */

export const useBeverageList = () => {
  const { loading, error, list } = useSelector(
    ({ beverageList }) => beverageList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBeverageList());
  }, [dispatch]);

  return { loading, error, list };
};

export const useBeverageItem = (id) => {
  const { loading, error, item } = useSelector(
    ({ beverageList }) => beverageList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBeverageItem(id));
  }, [id, dispatch]);

  return { loading, error, item };
};

/* selector function -------------------------------------------------------- */

export const selectBeverageList = createSelector(
  (state) => state.beverageList,
  (beverageList) => beverageList
);
