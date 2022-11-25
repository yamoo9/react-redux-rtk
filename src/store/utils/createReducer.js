export function createReducer(initialState, reducers) {
  const combinedReducer = (state = initialState, action) => {
    const reducersPathValue = Object.entries(reducers);
    let index = reducersPathValue.findIndex(
      ([reducerPath]) => reducerPath === action.type
    );
    if (index > -1) {
      const reducer = reducersPathValue[index][1];
      return reducer(state[action.type], action);
    } else {
      return state;
    }
  };
  return combinedReducer;
}
