import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { resetModal } from './slice/modalSlice';
import { setScreen } from './slice/changeScreenSlice';
import { useEffect } from 'react';
import Modal from './Container/Modals/Modal'
import Navbar from './Component/Navbar/Navbar'
import Homepage from './Container/Homepage/Homepage'
import Questions from './Container/Questions/Questions'

const App = () => {
  const { type, fullScreen } = useSelector((state) => state.modal);
  const { screen } = useSelector((state) => state.screen);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(resetModal())
  //     dispatch(setScreen({ screenName: "homepage" }))
  //   }, 1500)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <div className="app">
      {/* {type !== "" && <Modal type={type} fullScreen={fullScreen} />} */}
      <Navbar />
      {/* {screen === "homepage" && <Homepage />} */}
      {screen === "questions" && <Questions />}
    </div>
  );
}

export default App;
