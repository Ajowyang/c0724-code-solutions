import { FormEvent } from 'react';
export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent) {
    const currentTarget = event.target as HTMLFormElement;
    const formData = new FormData(currentTarget);
    const obj = Object.fromEntries(formData);
    console.log(`${obj.Username}, ${obj.Password}`);
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
            name="Username"></input>
        </label>
        <label className="text-black">
          Password
          <input
            className="bg-white border border-black"
            type="text"
            name="Password"></input>
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
