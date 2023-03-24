import { useSelector, useDispatch } from 'react-redux';
import { resetModal } from './slice/modalSlice';
import { useEffect } from 'react';
import Modal from './Container/Modals/Modal'

const App = () => {
  const { name } = useSelector((state) => state.test);
  const { type, fullScreen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  // const handleClick = () => {
  //   console.log('Anuj')

  // }
  // useEffect(() => {
  //   setTimeout(() => dispatch(resetModal()), 5000)
  // }, [])

  return (
    <div>
      {type !== "" && <Modal type={type} fullScreen={fullScreen} />}
      Anuj {name}
      {/* <Loader /> */}
      {/* <button onClick={() => handleClick()}>Click me</button> */}
    </div>
  );
}

export default App;
