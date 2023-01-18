import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  imageType: 'normal' | 'themoviedb' | undefined
}

export const Image = ({ imageType, className, ...rest}: Props) => {
  if (imageType === 'themoviedb') {
    rest.src = `${process.env.REACT_APP_IMAGE_BASE_URL}/original${rest.src}`;
  }
  return (
    <ImageComponent
      className={className}
      src={rest.src}
    >

    </ImageComponent>
  );
};
const ImageComponent = styled.img`
  object-fit: cover;
`;