import tw, { styled } from 'twin.macro';

export const Container = tw.div`
  relative z-[1] box-border inline-block h-full w-full whitespace-normal bg-transparent py-0 px-[0.2vw] pl-0
`;
export const Content = tw.div`
  flex flex-col h-full
`;
export const ThumbnailContainer = styled.div`
  ${tw`w-full overflow-hidden relative px-0 rounded-[0.2vw] pb-[55%]`}
`;
export const ThumbnailImage = tw.img`
  absolute top-0 left-0 w-full h-full object-cover
`;
export const DetailInfos = tw.div`
   transition-all  bg-black flex-1
`;
export const GenreList = tw.ul`flex items-center flex-wrap mt-1`;
export const GenreItem = tw.li`mr-2`;
