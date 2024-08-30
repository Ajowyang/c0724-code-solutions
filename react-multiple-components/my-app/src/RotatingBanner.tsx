type Props = {
  itemList: string[];
};

export function RotatingBanner({ itemList }: Props) {
  return <h1>{itemList[0]}</h1>;
}
