// import { useState } from 'react';

// type Props = {
//   itemList: string[];
// };

export function RotatingBanner() {
  // const [index, setIndex] = useState(0);

  return (
    <div>
      <Title></Title>
      <PrevButton></PrevButton>
      <Indicators></Indicators>
      <NextButton></NextButton>
    </div>
  );
}

type TitleProps = {
  title: string;
};
function Title({ title }: TitleProps) {
  return <div>{title}</div>;
}
function PrevButton() {
  return <button>Prev</button>;
}

function NextButton() {
  return <button>Next</button>;
}

function Indicators() {
  return (
    <ul>
      <button>0</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </ul>
  );
}
