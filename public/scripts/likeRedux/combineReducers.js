/**
 * 리듀서 병합 유틸리티 함수
 * @param {object} reducers 리듀서 병합 객체
 * @returns {object}
 */
export function combineReducers(reducers) {
  return (state = {}, action) => {
    for (const [key, reducer] of Object.entries(reducers)) {
      state[key] = reducer(state[key], action);
    }
    return state;
  };
}
