import { useEffect, useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { GoDot, GoDotFill } from 'react-icons/go';

interface imageObj {
  src: string;
  alt: string;
}
type CarouselProps = {
  images: imageObj[];
};

export function Carousel({ images }: CarouselProps) {
  const [activeImgId, setActiveImgId] = useState(0);
  // const [timerId, setTimerId] = useState<NodeJS.Timeout>();

  useEffect(() => {
    const id = setTimeout(() => {
      setActiveImgId((activeImgId + 1) % images.length);
    }, 3000);
    // setTimerId(id);
    return () => clearTimeout(id);
  }, [activeImgId, images]);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center">
        <Arrow
          onClick={() =>
            setActiveImgId((activeImgId - 1 + images.length) % images.length)
          }
          direction="left"
        />
        <ImageCard
          imgUrl={images[activeImgId].src}
          imgAlt={images[activeImgId].alt}
        />
        <Arrow
          onClick={() => setActiveImgId((activeImgId + 1) % images.length)}
          direction="right"
        />
      </div>
      <div className="flex items-center justify-center my-4">
        <Dots
          filledNdx={activeImgId}
          length={images.length}
          onClick={setActiveImgId}></Dots>
      </div>
    </div>
  );
}

type ImageCardProps = {
  imgUrl: string;
  imgAlt: string;
};
function ImageCard({ imgUrl, imgAlt }: ImageCardProps) {
  return (
    <div className="h-96 w-96 border flex justify-center">
      <img className=" h-full" src={imgUrl} alt={imgAlt} />
    </div>
  );
}

type ArrowProps = {
  direction: string;
  onClick: () => void;
};
function Arrow({ direction, onClick }: ArrowProps) {
  return (
    <div onClick={onClick}>
      {direction === 'right' ? <FaChevronRight className="text-4xl" /> : null}
      {direction === 'left' ? <FaChevronLeft className="text-4xl" /> : null}
    </div>
  );
}

type DotsProps = {
  length: number;
  filledNdx: number;
  onClick: (i: number) => void;
};
function Dots({ length, filledNdx, onClick }: DotsProps) {
  const dots = [];
  for (let i = 0; i < length; i++) {
    if (i === filledNdx) {
      dots.push(<GoDotFill className="text-3xl" key={i.toString()} />);
    } else {
      dots.push(
        <GoDot
          className="text-3xl"
          key={i.toString()}
          onClick={() => onClick(i)}
        />
      );
    }
  }
  return dots;
}
