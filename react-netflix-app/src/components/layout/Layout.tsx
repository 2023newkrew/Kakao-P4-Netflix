import { COLORS } from '@constants/colors.contant';
import styled from 'styled-components';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

const Container = styled.main`
    max-width: 100%;
    min-height: 100vh;
    background-color: ${COLORS.black};
    width: 100%;
    padding: 0;
    margin: 0;
`;