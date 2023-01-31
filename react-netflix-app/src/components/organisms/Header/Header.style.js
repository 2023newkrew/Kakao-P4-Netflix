import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 20px 0;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent);
  z-index: 100;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.div`
  margin: 0 10px;
`;

export const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: 120px;
  }
`;

// 어떻게 쓰는게 좋을지..?
export const BorderImage = styled.img`
  border-radius: ${(props) => (props.radius ? props.radius : "10px")};
`;

export const SearchBar = styled.div``;
