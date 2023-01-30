import tw, { styled } from 'twin.macro';

export const Container = styled.dialog`
  ${tw`bg-[rgba(0, 0, 0, 0.7)] fixed inset-0 z-[1000] flex h-full w-full flex-col items-center justify-center overflow-y-auto`}
  --scale: 0;
  transform: scale(var(--scale));
  transition: transform 200ms ease-in-out, opacity 300ms ease-in-out;
  will-change: opacity, transform;
`;
export const Content = tw.div`
  absolute overflow-y-auto left-[auto] top-0 md:top-10 flex h-full md:h-[calc(100vh - 5rem)] max-h-full w-full max-w-full md:max-w-[70%] flex-col items-center justify-center bg-[#222222] text-white
  [transform: translateX(0%) translateY(0px) scale(1) translateZ(0px)]
`;
export const CloseButton = tw.button`fixed right-5 top-5 rounded-full bg-[rgb(66,66,66,0.7)] text-white font-light w-10 h-10 text-xl hover:opacity-70 z-[1]`;
