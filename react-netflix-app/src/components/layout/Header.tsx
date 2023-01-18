import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '@assets/icon-netflix.svg';
import { Button } from '@components/common/Button';
import { useNavigate } from 'react-router-dom';


export function Header() {
  const navigate = useNavigate();  
  const handleLogoClick = () => {
    navigate('/');
  };
  const handleLoginClick = () => {
    navigate('/login');
  };
  return (
    <Container>
      <Logo onClick={handleLogoClick}/>
      <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
    </Container>
  );
}

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 56px;
  display: flex;
  margin: 0 auto;
  z-index: 99;
`;
const Logo = styled(LogoSVG)`
  width: 134px;
  height: 36px;
  object-fit: contain;
  cursor: pointer;
`;
const LoginButton = styled(Button)`
  margin-left: auto;
`;