import './ImageContainer.css';

type Props = {
  Source: string;
};

export function ImageContainer({ Source }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={Source} alt="space-image" />
      </div>
    </div>
  );
}
