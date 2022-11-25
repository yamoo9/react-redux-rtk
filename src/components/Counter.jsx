import { useState, useCallback } from 'react';

import { Row } from './Row';
import { Button } from './Button';
import { Output } from './Output';
import { Input } from './Input';
import { useCounter } from '../contexts/counter';

export function Counter() {
  const [amount, setAmount] = useState(2);

  const handleChangeAmount = useCallback((e) => {
    setAmount(Number(e.target.value));
  }, []);

  const {
    count,
    onIncrement,
    onDecrement,
    onIncrementByAmount,
    onIncrementAsync,
  } = useCounter();

  const handleIncrementByAmount = useCallback(() => {
    onIncrementByAmount(amount);
  }, [amount, onIncrementByAmount]);

  const handleIncrementAsync = useCallback(() => {
    onIncrementAsync(amount);
  }, [amount, onIncrementAsync]);

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
          onChange={handleChangeAmount}
        />
        <Button className="incByAmountButton" onClick={handleIncrementByAmount}>
          카운트 변경
        </Button>
        <Button className="asyncButton" onClick={handleIncrementAsync}>
          카운트 변경(비동기)
        </Button>
      </Row>
    </div>
  );
}
