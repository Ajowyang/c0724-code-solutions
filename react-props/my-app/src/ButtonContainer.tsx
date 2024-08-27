type Props = {
  btnTxt: string;
};
export function ButtonContainer({ btnTxt }: Props) {
  return (
    <div>
      <button>{btnTxt}</button>
    </div>
  );
}
