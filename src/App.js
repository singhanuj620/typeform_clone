import { Loader } from './Component'
import { useSelector, useDispatch } from 'react-redux';
import { setTest } from './slice/testSlice';

const App = () => {
  const { name } = useSelector((state) => state.test);
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('Anuj')
    dispatch(setTest("anujjj"))
  }

  return (
    <div>
      Anuj {name}
      <Loader />
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
}

export default App;
