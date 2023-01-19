import tw, { styled } from 'twin.macro';
import { Swiper } from 'swiper/react';

export const MovieSwiper = styled(Swiper)`
  ${tw`py-[20px] px-[4%] overflow-visible w-full flex overflow-x-clip`}

  & .swiper-pagination.swiper-pagination-bullets {
    left: unset;
    bottom: unset;
    ${tw`-top-2.5 w-fit bg-transparent rounded-none right-[4%] z-0`}

    & .swiper-pagination-bullet {
      ${tw`bg-white rounded-none m-0 mr-1 w-6 h-1`}
    }
  }

  & .swiper-button-prev,
  & .swiper-button-next {
    ${tw`bg-[hsla(0,0%, 8%, .5)] items-center justify-center rounded-b-md text-white top-[20px] h-[calc(100% - 40px)] mt-0 w-[4%]`}
  }
  & .swiper-button-prev:after,
  & .swiper-button-next:after {
    font-size: 1.25rem;
  }
  & .swiper-button-prev {
    ${tw`left-0`}
  }
  & .swiper-button-next {
    ${tw`right-0`}
  }
  & .swiper-button-prev.swiper-button-disabled,
  & .swiper-button-next.swiper-button-disabled {
    ${tw`invisible`}
  }
`;

export const CarouselContainer = tw.div`flex leading-[1.4] min-h-[150px]`;
