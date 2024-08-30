import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa6';
import { useState } from 'react';

export function StopWatch() {
  const [playing, setPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [timeElapsed, setTimeElapsed] = useState(0);

  function setIcon(): void {
    if (playing === false) {
      setPlaying(true);

      setIntervalId(
        setInterval(() => {
          setTimeElapsed((prev) => prev + 1);
        }, 1000)
      );
    } else {
      setPlaying(false);
      clearInterval(intervalId);
      setIntervalId(undefined);
    }
  }

  return (
    <>
      <div className="wrapper flex flex-col items-center">
        <div className="faceAndTime border border-black rounded-full w-48 h-48 flex items-center justify-center my-3">
          {timeElapsed}
        </div>
        <div onClick={() => setIcon()}>
          {playing ? <FaPause /> : <FaPlay />}
        </div>
      </div>
    </>
  );
}
