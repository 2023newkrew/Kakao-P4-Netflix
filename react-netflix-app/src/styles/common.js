import tw, { styled } from 'twin.macro';

export const PageContainer = tw.div`
  flex flex-col w-full
`;

export const Button = styled.button`
  font-size: 1em;
  margin: 0.5em 0.5em 0.5em 0;
  min-height: 50px;
  min-width: 74px;
  padding: 24.5px 2em;
  position: relative;
`;
export const SmallButton = styled(Button)`
  @media only screen and (min-width: 500px) {
    display: inline-block;
    font-size: 13px;
    margin-right: 0.5rem;
    min-height: 37px;
    min-width: 98px;
    width: auto;
  }

  display: block;
  line-height: 50px;
  margin: 0.5rem auto;
  padding: 0;
  width: 100%;
`;
