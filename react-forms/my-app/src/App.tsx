import './App.css';
import { RegistrationFormControlled } from './RegistrationFormControlled';
import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';

function App() {
  return (
    <>
      <RegistrationFormUncontrolled></RegistrationFormUncontrolled>
      <RegistrationFormControlled></RegistrationFormControlled>
    </>
  );
}

export default App;
