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
  transition-transform absolute top-0 right-0 left-0 invisible hover:visible hover:scale-125 hover:-translate-y-12 hover:origin-bottom hover:z-[2]
`;
export const DetailInfos = tw.div`
  bg-black w-full h-[70px] p-2 flex flex-col justify-between
`;
export const Genres = tw.p`flex items-start flex-wrap h-auto bg-black text-sm font-light`;
