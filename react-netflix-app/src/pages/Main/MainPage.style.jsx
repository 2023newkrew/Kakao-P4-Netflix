import tw, { styled } from 'twin.macro';
import { PageContainer as DefaultContainer } from '@styles/common';

export const PageContainer = tw(DefaultContainer)`relative`;
export const PageTitle = tw.h1`hidden`;

export const BannerContainer = tw.div`
  w-full pb-[40%] mb-10 bg-black relative select-none touch-pan-y
`;
export const BannerBackgroundLayer = tw.div`
  h-[56vh] absolute top-0 w-full
`;
export const BannerContent = tw.div`
  absolute top-0 left-0 right-0 bottom-0 flex items-end justify-center
`;
export const BannerMovieInfo = tw.div`
  absolute bottom-5 flex flex-col justify-end left-[4%] top-0 w-[36%] sm:bottom-10

  [& > h3]:text-5xl [& > h3]:mb-2 [&>p]:mb-4
  [& > div]:flex
`;
const BannerButton = tw.button`
  rounded-md shrink-0 py-2 pl-8 pr-10 text-xl flex items-center gap-1 mr-2 mt-2
  [&.primary]:text-black
  [&.primary]:bg-white
  [&.secondary]:bg-[rgba(109, 109, 110, 0.7)]
  [&.secondary]:text-white
`;
const BannerUtils = tw.div`
  absolute bottom-10 right-[4%] flex items-center gap-4
`;

export const Banner = {
  Container: BannerContainer,
  BackgroundLayer: BannerBackgroundLayer,
  Content: BannerContent,
  MovieInfo: BannerMovieInfo,
  Button: BannerButton,
  Utils: BannerUtils,
};
export const MainView = styled.main`
  ${tw`relative block`}
`;
export const RowContainer = styled.div`
  ${tw`px-2 my-[3vw] mx-0 box-border outline-none relative`}
  transition: transform .54s cubic-bezier(.5,0,.1,1) 0s;
`;
export const RowTitle = tw.h2`text-2xl my-2 ml-[4%]`;
export const RowContent = tw.div``;
export const Row = {
  Title: RowTitle,
  Container: RowContainer,
  Content: RowContent,
};
