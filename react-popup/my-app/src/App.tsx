import { useRef, useState } from 'react';
import './App.css';
import { Popup } from './Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const myRef = useRef<HTMLButtonElement>(null);
  const menuItems = [
    <li>menuItem1</li>,
    <li>menuItem2</li>,
    <li>menuItem3</li>,
    <li>menuItem4</li>,
    <li>menuItem5</li>,
  ];

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
          positionTo={myRef.current}>
          <ul>{menuItems}</ul>
        </Popup>
      )}
      <p>Paragraph of text #2</p>
    </>
  );
}

export default App;
