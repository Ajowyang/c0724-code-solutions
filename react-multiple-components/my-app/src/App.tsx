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
  return (
    <>
      <RotatingBanner itemList={items}></RotatingBanner>
    </>
  );
}

export default App;
