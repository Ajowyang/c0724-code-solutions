// import { useState } from 'react';
import { RotatingBanner } from './RotatingBanner';
import './App.css';
import { NumberDisplay } from './NumberDisplay';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <RotatingBanner itemList={items}></RotatingBanner>
      <NumberDisplay></NumberDisplay>
    </>
  );
}

export default App;
