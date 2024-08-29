import { FormEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [userName, setUserName] = useState('');
  const [passWord, setpassWord] = useState('');

  function handleSubmit(event: FormEvent) {
    console.log(`{${userName}, ${passWord}}`);
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="text-black">
          Username
          <input
            className="bg-white border border-black"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}></input>
        </label>
        <label className="text-black">
          Password
          <input
            className="bg-white border border-black"
            type="text"
            value={passWord}
            onChange={(e) => setpassWord(e.target.value)}></input>
        </label>
        <button
          className="text-black bg-gray-100 py-0 border border-black"
          type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
