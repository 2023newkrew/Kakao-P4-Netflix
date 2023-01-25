import tw, { styled } from 'twin.macro';

export const Container = styled.div`
  ${tw`box-border inline-block w-full whitespace-normal bg-transparent py-0 px-[0.2vw]`}

  &:hover + .movie-detail {
    visibility: visible;
  }
`;

export const ThumbnailContainer = styled.div`
  ${tw`w-full relative px-0 rounded-[0.2vw] pb-[58%]`}
`;
export const ThumbnailImage = tw.img`
absolute top-0 left-0 w-full h-full object-cover
`;
export const DetailContainer = tw.div`
  cursor-pointer transition-transform [transition-duration: 300ms] [transition-delay: 100ms] absolute top-0 right-0 left-0 invisible hover:visible hover:scale-125 hover:-translate-y-12 hover:origin-bottom hover:z-[2]
`;
export const UtilsWrapper = tw.div`relative w-full flex items-center mt-2`;
export const UtilButton = tw.button`h-10 w-10 rounded-full mr-2 text-white border-gray-300 hover:border-gray-100 border-[1.5px] bg-[#2c2c2c] flex items-center justify-center text-xs`;
export const PlayButton = tw(UtilButton)`bg-white hover:bg-gray-100 text-[#2c2c2c]`;
export const MoreButton = tw(UtilButton)`absolute right-0`;
export const DetailInfos = tw.div`
  bg-black w-full p-2 flex flex-col justify-between
`;
export const InfoRow = tw.div`w-full flex items-center my-2 bg-inherit`;
export const UserVote = tw.p`text-sm text-[#45d369]`;
export const Genres = tw.p`flex items-start flex-wrap h-auto bg-black text-sm font-light`;
