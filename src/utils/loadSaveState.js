const STORE_KEY = 'redux/store';

export const loadState = (key = STORE_KEY) => {
  const storeData = localStorage.getItem(key);
  return storeData ? JSON.parse(storeData) : undefined;
};

export const saveState = (storeState, key = STORE_KEY) => {
  const serializedState = JSON.stringify(storeState);
  localStorage.setItem(key, serializedState);
};

export const removeState = (key = STORE_KEY) => {
  localStorage.removeItem(key);
};
