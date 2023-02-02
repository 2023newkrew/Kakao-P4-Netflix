import tw, { styled } from 'twin.macro';
import { PageContainer as DefaultContainer, SmallButton } from '../styles/common';
import backgroundImageSrc from '@assets/login-background.jpeg';

export const PageContainer = styled(DefaultContainer)`
  background-image: url(${backgroundImageSrc});
  align-items: center;

  height: 100%;
`;
export const PageTitle = tw.h1`
  mb-8 text-white font-medium
`;
export const PageContent = tw.div`
[box-sizing: border-box] m-0 flex h-full min-h-[500px] w-full min-w-[380px] max-w-[680px] flex-col rounded-md bg-[rgba(0,0,0,0.75)] px-12 pt-12 pb-[30px] sm:mt-[90px] sm:mb-[90px] sm:px-16 sm:pt-14 sm:pb-[40px] sm:max-w-[450px]
`;
export const SubmitButton = tw(SmallButton)`
  w-full text-white bg-[#e50815] mt-6 mx-0 mb-3 rounded-md text-[16px]
`;
