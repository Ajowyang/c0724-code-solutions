type Props = {
  descTxt: string;
};

export function ImageDescription({ descTxt }: Props) {
  return (
    <div>
      <p>{descTxt}</p>
    </div>
  );
}
