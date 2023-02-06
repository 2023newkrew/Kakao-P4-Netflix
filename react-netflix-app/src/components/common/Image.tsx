import { ImgHTMLAttributes, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  imageType: 'normal' | 'themoviedb' | undefined,
  isOriginal?: boolean
}

export const Image = ({ imageType, className, src, isOriginal, ...rest }: Props) => {
  const [isPreview, setIsPreview] = useState(true);
  
  const imgRef = useRef<HTMLImageElement>(null);
  const observer = useRef<IntersectionObserver>();
  
  const imageURL = useMemo(() => {
    if (imageType === 'themoviedb') {
      if (isPreview === true) {
        return `${process.env.REACT_APP_IMAGE_BASE_URL}/w92${src}`;  
      }
      if (isOriginal) {
        return `${process.env.REACT_APP_IMAGE_BASE_URL}/original${src}`;  
      }
      return `${process.env.REACT_APP_IMAGE_BASE_URL}/w500${src}`;
    }
    return src;
  }, [src, isPreview]);

  useEffect(() => {
    observer.current = new IntersectionObserver(intersectionObserver);
    imgRef.current && observer.current.observe(imgRef.current);
  }, []);
  
  const intersectionObserver = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        
        io.unobserve(entry.target);
        setIsPreview(false);
      }
    });
  };

  return (
    <ImageComponent
      ref={imgRef}
      {...rest}
      className={className}
      src={imageURL}
    >

    </ImageComponent>
  );
};
const ImageComponent = styled.img`
  object-fit: cover;
`;