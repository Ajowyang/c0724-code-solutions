import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSrc = ['/starry-sky.jpeg', '/DARK.png', '/LIGHT.png'];
const imageCap = [
  'A Beautiful Image of Space',
  'DARK Attribute Icon',
  'LIGHT Attribute icon',
];
const imageDescription = [
  'Sky full of stars!!!',
  'Darkness!',
  'Let there be Light!',
];

const buttonText = 'Click for Next Image';

export default function App() {
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageSrc} />
      <ImageCaption imageCap={imageCap} />
      <ImageDescription imageDescrip={imageDescription} />
      <ButtonContainer buttonText={buttonText} />
    </>
  );
}
