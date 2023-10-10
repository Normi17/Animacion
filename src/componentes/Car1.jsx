import React from 'react';
import styled from 'styled-components';
import vaca from '../assets/vaca.jpg';
import pig from '../assets/pig.jpg';
import horse from '../assets/horse.jpg';
import dog from '../assets/dog.jpg';

const CarouselContainer = styled.div`
  width: 100%;
  height: 400px; /* Altura fija para el carrusel */
  margin: 0 auto;
  position: relative;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%; /* Altura fija para el contenedor de imágenes */
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  text-align: center;
  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: opacity 1s ease-in-out; /* Solo cambiamos la opacidad */
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 50%;
  left: 10px;
  font-size: 24px;
  font-weight: bold;
  color: ${({ textColor }) => textColor};
  z-index: 1;
`;

const Car = () => {
  const images = [vaca, pig, horse, dog];
  const textColors = ['white', 'black', 'white', 'white'];

  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <ImageContainer key={index}>
          <Image src={image} alt={`Image ${index + 1}`} active={index === activeIndex} />
          <TextOverlay textColor={textColors[activeIndex]}>
            TU PROVEEDOR <br />  VETERINARIO
          </TextOverlay>
        </ImageContainer>
      ))}
    </CarouselContainer>
  );
};


export default Car;
