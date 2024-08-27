import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerTxt = 'React Image Bank';
const imageSrc = '/starry-sky.jpeg';
const capt = 'A beautiful Image of Space';
const descriptionTxt =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam incidunt sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus, commodi placeat eveniet, quam voluptates facere et magnam architecto quaerat velit voluptas rerum quos asperiores quis in! Nemo aut aliquam quas dolore quaerat, error numquam odio modi eos vero. Modi nisi eos autem? Iusto hic impedit aspernatur labore quos nesciunt? Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi ipsum, dicta sunt laborum similique repellat?';
const buttonTxt = 'Click For Next Image';

export default function App() {
  return (
    <>
      <Header headerText={headerTxt} />
      <ImageContainer Source={imageSrc} />
      <ImageCaption captTxt={capt} />
      <ImageDescription descTxt={descriptionTxt} />
      <ButtonContainer btnTxt={buttonTxt} />
    </>
  );
}
