'use client';
import {
  decrement,
  increment,
  incrementByAmount,
} from '@/redux/slices/counter';
import { useDispatch, useSelector } from 'react-redux';

const CounterPage = () => {
  const { value } = useSelector((state) => state.counter);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  console.log(posts);

  return (
    <div>
      <h1>CounterPage</h1>
      <p>Count: {value}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
};

export default CounterPage;
