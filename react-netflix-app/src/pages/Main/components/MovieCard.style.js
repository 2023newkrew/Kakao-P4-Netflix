import tw, { styled } from 'twin.macro';

export const Container = tw.div`
 bg-transparent inline-block py-0 px-[0.2vw] pl-0 relative whitespace-normal z-[1] box-border w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5
`;
export const Content = tw.div`
  flex flex-col
`;
export const ThumbnailContainer = styled.div`
  ${tw`w-full overflow-hidden relative px-0 rounded-[0.2vw] pb-[55%]`}
`;
export const ThumbnailImage = tw.img`
  absolute top-0 left-0 w-full h-full object-cover
`;
export const DetailInfos = tw.div`
   transition-all -bottom-16 left-0 right-0 bg-black
`;
export const GenreList = tw.ul`flex items-center flex-wrap mt-1`;
export const GenreItem = tw.li`mr-2`;
