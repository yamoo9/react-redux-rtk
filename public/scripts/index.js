import store from './store/store.js';
import {
  increment,
  decrement,
  incrementByAmount,
} from './store/features/counter/counter.slice.js';

/* -------------------------------------------------------------------------- */

const app = document.querySelector('.App');
const input = app?.querySelector('.input');
const value = app?.querySelector('.value');

const handleAppClick = (e) => {
  const { target: element } = e;

  if (element.localName === 'button') {
    if (element.matches('.incButton')) {
      store.dispatch(increment());
    }
    if (element.matches('.decButton')) {
      store.dispatch(decrement());
    }
    if (element.matches('.incByAmountButton')) {
      store.dispatch(incrementByAmount(Number(input.value) || 0));
    }
    if (element.matches('.asyncButton')) {
      setTimeout(() => {
        store.dispatch(incrementByAmount(Number(input.value) || 0));
      }, 1000);
    }
  }
};

app?.addEventListener('click', handleAppClick);

const render = () => {
  const { count: updateCountValue } = store.getState();
  value.textContent = updateCountValue;
};

store.subscribe(render);
