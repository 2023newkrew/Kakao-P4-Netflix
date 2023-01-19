import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

const SliderLayout = styled.section`
  margin: 3vw 0;
`;

const Name = styled.div`
  margin-left: 4vw;
  margin-bottom: 1vw;
  font-size: 1.6vw;
  font-weight: bold;
`;

const List = styled(Swiper)`
  padding: 0 4vw;

  .swiper-wrapper {
    align-items: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: 0;
    width: 4vw;
    height: 100%;
    margin-top: unset;
    color: white;

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-disabled {
    visibility: hidden;
  }
`;

const Item = styled(SwiperSlide)`
  box-sizing: border-box;
  padding: 0 0.4vw;
`;

export default function Slider({ name, items }) {
  return (
    <SliderLayout>
      <Name>{name}</Name>
      <List
        navigation
        modules={[Navigation]}
        slidesPerView={3}
        slidesPerGroup={3}
        breakpoints={{
          800: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1100: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          1400: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
        }}
      >
        {items.map(({ id, poster_path, title }) => (
          <Item key={id}>
            <img
              src={`${process.env.REACT_APP_IMAGE_BASE_URL}${poster_path}`}
              alt={title}
            />
          </Item>
        ))}
      </List>
    </SliderLayout>
  );
}

Slider.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
