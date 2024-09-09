import { useRef, useState } from 'react';

import './App.css';
import { Popup } from './Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const myRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        ref={myRef}>
        Pop up!
      </button>
      <p>Paragraph of text #1</p>
      {isOpen && (
        <Popup
          open={isOpen}
          onClose={() => setIsOpen(false)}
          positionTo={myRef.current}></Popup>
      )}
      <p>Paragraph of text #2</p>
    </>
  );
}

export default App;
