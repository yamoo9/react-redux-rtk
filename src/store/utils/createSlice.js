import createAction from './createAction';
import createReducer from './createReducer';

function createSlice({ name, initialState, reducers }) {
  const slice = {
    actions: Object.keys(reducers).reduce(
      (actions, reducerPath) =>
        (actions[reducerPath] = createAction(reducerPath)),
      {}
    ),
    reducer: createReducer({ [name]: initialState }, reducers),
  };

  return slice;
}

export default createSlice;
