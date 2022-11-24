const app = document.querySelector('.App');
const input = app?.querySelector('.input');
const value = app?.querySelector('.value');

const handleAppClick = (e) => {
  const { target: element } = e;

  if (element.localName === 'button') {
    if (element.matches('.incButton')) {
      console.log('카운트 증가');
    }
    if (element.matches('.decButton')) {
      console.log('카운트 감소');
    }
    if (element.matches('.incByAmountButton')) {
      console.log('사용자 정의 카운트 값 증가');
    }
    if (element.matches('.asyncButton')) {
      console.log('사용자 정의 값 증가 (비동기)');
    }
  }
};

app?.addEventListener('click', handleAppClick);
