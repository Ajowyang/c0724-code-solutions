import { useState } from 'react';
export function ToggleSwitch() {
  const [onOrOff, setOnOrOff] = useState('toggle-switch is-on');
  const [labelTxt, setLabelTxt] = useState('On');
  function handleClick() {
    if (onOrOff === 'toggle-switch is-on') {
      setOnOrOff('toggle-switch is-off');
      setLabelTxt('Off');
    } else if (onOrOff === 'toggle-switch is-off') {
      setOnOrOff('toggle-switch is-on');
      setLabelTxt('On');
    }
  }

  return (
    <div onClick={handleClick} className={onOrOff}>
      <div className="slider">
        <div className="switch"></div>
      </div>
      <span className="state-label">{labelTxt}</span>
    </div>
  );
}
