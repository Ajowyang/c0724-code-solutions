// import { useState } from 'react';
import { RotatingBanner } from './RotatingBanner';
import './App.css';

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
      <RotatingBanner>{items[0]}</RotatingBanner>
    </>
  );
}

export default App;
