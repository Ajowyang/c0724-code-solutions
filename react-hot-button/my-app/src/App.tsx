import { useState } from 'react';
import { HotButton } from './HotButton';
import './App.css';

export function App() {
  const [btnClicks, setBtnClicks] = useState(0);
  const [btnLvlClass, setBtnLvlClass] = useState('hot-btn-lvl-1');

  function HandleButtonClick() {
    console.log(btnClicks);
    setBtnClicks(btnClicks + 1);
    if (btnClicks > 3 && btnClicks < 6) {
      setBtnLvlClass('hot-btn-lvl-2');
    } else if (btnClicks >= 9 && btnClicks < 12) {
      setBtnLvlClass('hot-btn-lvl-3');
    } else if (btnClicks >= 12 && btnClicks < 15) {
      setBtnLvlClass('hot-btn-lvl-4');
    } else if (btnClicks >= 15 && btnClicks < 18) {
      setBtnLvlClass('hot-btn-lvl-5');
    } else if (btnClicks >= 18) {
      setBtnLvlClass('hot-btn-lvl-6');
    }
  }

  return (
    <>
      <HotButton
        btnLvlClass={btnLvlClass}
        onButtonClick={HandleButtonClick}></HotButton>
    </>
  );
}

export default App;
