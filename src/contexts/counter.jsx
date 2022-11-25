import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
} from 'react';

const CounterContext = createContext();

export const CounterProvider = (props) => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(2);

  const handleIncrement = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  const handleIncrementByAmount = useCallback((amount) => {
    setCount((count) => count + amount);
  }, []);

  const handleIncrementAsync = useCallback((amount, timeout = 1000) => {
    setTimeout(() => {
      setCount((count) => count + amount);
    }, timeout);
  }, []);

  const handleChangeAmount = useCallback((newAmount) => {
    setAmount(newAmount);
  }, []);

  const counterValue = useMemo(
    () => ({
      count,
      amount,
      onIncrement: handleIncrement,
      onDecrement: handleDecrement,
      onIncrementByAmount: handleIncrementByAmount,
      onIncrementAsync: handleIncrementAsync,
      onChangeAmount: handleChangeAmount,
    }),
    [
      count,
      amount,
      handleIncrement,
      handleDecrement,
      handleIncrementByAmount,
      handleIncrementAsync,
      handleChangeAmount,
    ]
  );

  return <CounterContext.Provider value={counterValue} {...props} />;
};

export const useCounter = () => {
  const value = useContext(CounterContext);
  if (!value) {
    throw new Error('useCounter는 CounterProvider 내부에서만 사용 가능합니다.');
  }
  return value;
};
