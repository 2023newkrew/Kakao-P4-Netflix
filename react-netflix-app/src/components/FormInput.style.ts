import tw, { styled } from 'twin.macro';

export const InputContainer = tw.div`
  flex w-full flex-col relative pb-4
`;
export const InputField = styled.div<{ isError: boolean }>`
  ${tw`rounded-md relative`}
  ${({ isError }) => (isError ? 'border:none' : 'border-bottom: 2px solid #e87c05')}
`;
export const Input = styled.input`
  ${tw`h-[50px] w-full rounded-md border-0 bg-[#333333] leading-[50px] text-white focus:bg-[#454545] pt-4 pb-0 px-5`}
  &:focus + .placeLabel {
    ${tw`text-[11px] translate-y-0 top-0`}
  }
`;

export const PlaceLabel = styled.label<{ hasValue: boolean }>`
  ${tw`absolute top-1/2 left-5 text-[#8c8c8c] text-[16px] -translate-y-1/2`}
  ${({ hasValue }) => (hasValue ? tw`text-[11px] translate-y-0 top-0` : ``)}
  transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease;
`;

export const ErrorMessage = tw.p`text-[#e87c05] text-xs -mb-3 py-2 px-1`;
