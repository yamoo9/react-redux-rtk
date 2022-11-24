import { Row } from './Row';
import { Button } from './Button';
import { Output } from './Output';
import { Input } from './Input';
import { useCounter } from '../contexts/counter';

export function Counter() {
  const {
    count,
    amount,
    onIncrement,
    onDecrement,
    onIncrementByAmount,
    onIncrementAsync,
  } = useCounter();

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
        <Input label="카운트 변경 값 설정" defaultValue={amount} />
        <Button
          className="incByAmountButton"
          onClick={() => {
            onIncrementByAmount(amount);
          }}
        >
          카운트 변경
        </Button>
        <Button
          className="asyncButton"
          onClick={() => {
            onIncrementAsync(amount);
          }}
        >
          카운트 변경(비동기)
        </Button>
      </Row>
    </div>
  );
}
