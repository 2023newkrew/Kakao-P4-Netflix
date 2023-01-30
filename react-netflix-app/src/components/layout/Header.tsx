import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '@assets/icon-netflix.svg';
import { Button } from '@components/common/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { COLORS } from '@constants/colors.contant';
import { debounce } from '@utils/debounce';

export function Header() {
  const navigate = useNavigate();
  const [isTop, setIsTop] = useState(true);  
  
  const handleLogoClick = () => {
    navigate('/');
  };
  const handleLoginClick = () => {
    navigate('/login');
  };
  useEffect(() => {

    const handleScroll = debounce(() => {
      const isModalOpen = document.body.style.getPropertyValue('position') === 'fixed';
      if (isModalOpen) return;
      
      if (window.scrollY < 80) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    }, 100);
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container isTop={isTop}>
      <Logo onClick={handleLogoClick}/>
      <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
    </Container>
  );
}

const Container = styled.header<{isTop: boolean}>`
  position: ${props => props.isTop ? 'absolute' : 'fixed'};
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 56px;
  height: 66px;
  display: flex;
  align-items: center;
  
  margin: 0 auto;
  
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent);
  background: ${props => props.isTop ? 'none' : COLORS.black};
`;
const Logo = styled(LogoSVG)`
  height: 24px;
  object-fit: contain;
  cursor: pointer;
`;
const LoginButton = styled(Button)`
  margin-left: auto;
  height: 32px;
`;