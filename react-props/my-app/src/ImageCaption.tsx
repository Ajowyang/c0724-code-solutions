type Props = {
  captTxt: string;
};

export function ImageCaption({ captTxt }: Props) {
  return (
    <div>
      <h3>{captTxt}</h3>
    </div>
  );
}
