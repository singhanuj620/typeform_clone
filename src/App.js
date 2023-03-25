import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { resetModal } from './slice/modalSlice';
import { useEffect } from 'react';
import Modal from './Container/Modals/Modal'
import Navbar from './Component/Navbar/Navbar'
import Homepage from './Container/Homepage/Homepage'

const App = () => {
  const { type, fullScreen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(resetModal()), 1500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="app">
      {type !== "" && <Modal type={type} fullScreen={fullScreen} />}
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
