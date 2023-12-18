import {useAppSelector, useAppDispatch} from '../redux/hooks';
import {increment, selectCount} from '../redux/slices/counterSlice';

export default function ReactiveCounter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}> count is: {count}</button>
      <br />
      <br />
      <code>packages/renderer/src/components/ReactiveCounter.tsx</code>
    </>
  );
}
