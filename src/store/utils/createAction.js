// 참고: https://redux-toolkit.js.org/api/createAction

export function createAction(type, prepareFn) {
  const action = { type };
  const actionCreator = (payload) => {
    if (payload) action.payload = payload;
    const preapreAction = prepareFn?.(payload) ?? {};
    return { ...action, ...preapreAction };
  };
  actionCreator.type = type;
  actionCreator.toString = () => type;
  return actionCreator;
}
