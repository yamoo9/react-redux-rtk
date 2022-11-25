import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import {
//   showAll,
//   showActived,
//   showCompleted,
//   setVisibilityFilter,
// } from 'store/features/visibilityFiler';
import {
  showAll,
  showActived,
  showCompleted,
  setVisibilityFilter,
} from 'store/slices/visibilityFilter';

export function useShortcut() {
  const dispatch = useDispatch();

  useEffect(() => {
    const changeVisibleFilter = (filter) =>
      dispatch(setVisibilityFilter(filter));

    const handleShortcut = (e) => {
      if (e.ctrlKey) {
        switch (e.key) {
          default:
          case '1':
            changeVisibleFilter(showAll.type);
            break;
          case '2':
            changeVisibleFilter(showActived.type);
            break;
          case '3':
            changeVisibleFilter(showCompleted.type);
        }
      }
    };

    document.addEventListener('keyup', handleShortcut);

    return () => document.removeEventListener('keyup', handleShortcut);
  }, [dispatch]);
}
