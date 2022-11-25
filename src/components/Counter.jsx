import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
} from 'features/counter/counter.slice';

import { Row } from './Row';
import { Button } from './Button';
import { Output } from './Output';
import { Input } from './Input';

export function Counter() {
  const [amount, setAmount] = useState(2);

  const onChangeAmount = useCallback((e) => {
    setAmount(Number(e.target.value));
  }, []);

  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const onIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const onDecrement = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const onIncrementByAmount = useCallback(() => {
    dispatch(incrementByAmount(amount));
  }, [amount, dispatch]);

  const onIncrementAsync = useCallback(() => {
    setTimeout(onIncrementByAmount, 1000);
  }, [onIncrementByAmount]);

  return (
    <div className="Counter">
      <Row>
        <Button className="incButton" label="카운트 증가" onClick={onIncrement}>
          +
        </Button>
        <Output>{count}</Output>
        <Button className="decButton" label="카운트 감소" onClick={onDecrement}>
          -
        </Button>
      </Row>
      <Row>
        <Input
          label="카운트 변경 값 설정"
          value={amount}
          onChange={onChangeAmount}
        />
        <Button className="incByAmountButton" onClick={onIncrementByAmount}>
          카운트 변경
        </Button>
        <Button className="asyncButton" onClick={onIncrementAsync}>
          카운트 변경(비동기)
        </Button>
      </Row>
    </div>
  );
}
