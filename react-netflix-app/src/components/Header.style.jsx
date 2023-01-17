import { Link } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import { breakpoints } from '../styles/theme';

export const HeaderContainer = tw.header`fixed top-0 right-0 left-0 z-[1] h-[60px] text-xl`;

export const HeaderContent = styled.nav`
  ${tw`z-[2] h-full flex items-center px-[4%] text-sm transition-all`}
  background-image: linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent);
  transition: background-color 0.4s;
`;
export const LogoLink = styled(Link)`
  ${tw`mr-6 flex items-center cursor-pointer h-full`}

  & > img {
    height: 24px;
  }
`;
export const PrimaryMenus = styled.ul`
  ${tw`flex items-center`}

  & > li:not(:first-of-type) {
    display: none;
  }
  @media screen and (min-width: ${breakpoints.sm}) {
    & > li:not(:first-of-type) {
      display: block;
    }
  }
`;
export const SecondaryMenus = styled.ul`
  ${tw`flex grow h-full justify-end items-center absolute right-[4%] top-0`}
  & > li:nth-of-type(1), 
  & > li:nth-of-type(4) {
    display: none;
  }
  @media screen and (min-width: ${breakpoints.sm}) {
    & > li:nth-of-type(1),
    & > li:nth-of-type(4) {
      display: block;
    }
  }
`;
export const MenuItem = tw.li`
  ml-6 block
`;
