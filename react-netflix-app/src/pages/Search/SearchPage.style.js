import tw, { styled } from 'twin.macro';
import { PageContainer as DefaultContainer } from '@styles/common';

export const PageContainer = tw(DefaultContainer)`pt-[60px] z-0`;
export const SearchLayout = tw.main`pt-[3%] flex flex-col px-10 max-w-[1280px] mx-auto w-full`;
export const SearchResultHeader = tw.header`w-full min-h-[65px]`;
export const SearchResultContents = styled.div`
  ${tw`pt-[3%] flex flex-wrap w-full`}

  & >div {
    ${tw`max-w-[calc(33% - 0.25rem)] mr-1 md:max-w-[calc(25% - 0.5rem)] md:mr-2 mb-10`}
  }
`;
export const RelatedKeywordsWrapper = tw.div`mt-4 w-full flex min-h-[10px] m-0`;
export const KeywordsTitle = tw.span`text-[#808080] text-[14px] mr-1.5 [flex:0 auto] whitespace-nowrap`;
