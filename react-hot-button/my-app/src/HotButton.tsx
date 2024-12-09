import './App.css';

type Props = {
  onButtonClick: () => void;

  btnLvlClass: string;
};

export function HotButton({ onButtonClick, btnLvlClass }: Props) {
  return (
    <button className={btnLvlClass} onClick={onButtonClick}>
      Hot Button
    </button>
  );
}
