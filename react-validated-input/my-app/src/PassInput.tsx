import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

export function PassInput() {
  const [passWord, setPassWord] = useState('');

  function changePasswordInput(val: string) {
    setPassWord(val);
  }
  if (passWord.length === 0) {
    return (
      <div>
        <p className="text-black mx-2">Password</p>
        <div className="flex items-center">
          <input
            value={passWord}
            onChange={(e) => {
              changePasswordInput(e.target.value);
            }}
            className="bg-white border-2 border-black text-black px-1 mx-2"
            type="password"
          />
          <FaXmark className="text-red-500 h-6 w-6" />
        </div>
        <p className="text-red-500 mx-2">A password is required.</p>
      </div>
    );
  } else if (passWord.length < 8) {
    // display red X and error
    return (
      <div>
        <p className="text-black mx-2">Password</p>
        <div className="flex items-center">
          <input
            value={passWord}
            onChange={(e) => {
              changePasswordInput(e.target.value);
            }}
            className="bg-white border-2 border-black text-black px-1 mx-2"
            type="password"
          />
          <FaXmark className="text-red-500 h-6 w-6" />
        </div>
        <p className="text-red-500 mx-2">Your password is too short.</p>
      </div>
    );
  } else {
    // display green check and no error
    return (
      <div>
        <p className="text-black mx-2">Password</p>
        <div className="flex items-center">
          <input
            value={passWord}
            onChange={(e) => {
              changePasswordInput(e.target.value);
            }}
            className="bg-white border-2 border-black text-black px-1 mx-2"
            type="password"
          />
          <FaCheck className="text-green-500 h-6 w-6" />
        </div>
      </div>
    );
  }
}
