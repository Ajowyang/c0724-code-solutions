import { useState } from 'react';

// type Props = {
//   itemList: string[];
// };

type rotatingBannerProps = {
  items: string[];
};

export function RotatingBanner({ items }: rotatingBannerProps) {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col align-center items-center">
      <Title titleStr={items[index]}></Title>
      <PrevButton
        onPrevClick={() => {
          setIndex((index - 1 + items.length) % items.length);
          console.log(index);
        }}></PrevButton>
      <Indicators length={items.length} selectedNdx={index}></Indicators>
      <NextButton
        onNextClick={() => {
          setIndex((index + 1) % items.length);
          console.log('fru');
        }}></NextButton>
    </div>
  );
}

type TitleProps = {
  titleStr: string;
};
function Title({ titleStr }: TitleProps) {
  return <h1 className="text-4xl">{titleStr}</h1>;
}

type PrevProps = {
  onPrevClick: () => void;
};
function PrevButton({ onPrevClick }: PrevProps) {
  return (
    <button className="border border-black h-16 w-32" onClick={onPrevClick}>
      Prev
    </button>
  );
}

type NextProps = {
  onNextClick: () => void;
};
function NextButton({ onNextClick }: NextProps) {
  return (
    <button className="border border-black h-16 w-32" onClick={onNextClick}>
      Next
    </button>
  );
}

type IndicatorsProps = {
  length: number;
  selectedNdx: number;
};
function Indicators({ length, selectedNdx }: IndicatorsProps) {
  const indicators = [];
  for (let i = 0; i < length; i++) {
    indicators.push(
      <button
        className="border border-black w-16 h-16 text-2xl"
        style={{ backgroundColor: i === selectedNdx ? '#aaf' : undefined }}>
        {i}
      </button>
    );
  }

  return <div>{indicators}</div>;
}
