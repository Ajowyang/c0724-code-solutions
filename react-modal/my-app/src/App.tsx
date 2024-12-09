import { useState } from 'react';

import './App.css';
import { Modal } from './Modal';

function App() {
  // const modal = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}>
        Delete Me!
      </button>

      <Modal
        children={
          <div className="flex flex-col">
            <p>Do you really want to delete?</p>
            <div className="flex  justify-center">
              <button
                onClick={() => {
                  alert('something was deleted');
                  setOpen(false);
                }}>
                Delete
              </button>
              <button onClick={() => setOpen(false)}>Cancel</button>
            </div>
          </div>
        }
        isOpen={open}
        onClose={() => setOpen(false)}></Modal>
    </>
  );
}

export default App;
