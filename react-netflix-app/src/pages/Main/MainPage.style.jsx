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
export const Banner = {
  Container: BannerContainer,
  BackgroundLayer: BannerBackgroundLayer,
  Content: BannerContent,
};
export const MainView = styled.main`
  ${tw`relative block`}
`;
export const RowContainer = styled.div`
  ${tw`px-2 my-[3vw] mx-0 box-border outline-none`}
  transition: transform .54s cubic-bezier(.5,0,.1,1) 0s;
`;
export const RowTitle = tw.h2`text-2xl my-2 ml-[4%]`;
export const RowContent = tw.div``;
export const Row = {
  Title: RowTitle,
  Container: RowContainer,
  Content: RowContent,
};
