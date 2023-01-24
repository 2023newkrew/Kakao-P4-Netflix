import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';
import Slider from '@components/slider/Slider';

const Item = styled(SwiperSlide)`
  box-sizing: border-box;
  padding: 0 0.4vw;
`;

export default function MovieSlider({ name, items }) {
  return (
    <Slider name={name}>
      {items.map(({ id, poster_path, title }) => (
        <Item key={id}>
          <img
            src={`${process.env.REACT_APP_IMAGE_BASE_URL}${poster_path}`}
            alt={title}
          />
        </Item>
      ))}
    </Slider>
  );
}

MovieSlider.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
