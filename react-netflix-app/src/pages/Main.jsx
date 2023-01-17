import Header from '../components/Header';
import tw, { styled } from 'twin.macro';
import { PageContainer as DefaultContainer } from '../styles/common';

const PageContainer = tw(DefaultContainer)`
  static
`;
const MainView = styled.main`
  min-height: 1500px;
  ${tw`relative z-0 block pt-[60px]`}
`;
const Main = () => {
  return (
    <PageContainer>
      <Header />
      <MainView>
        <h1>Main 페이지</h1>
      </MainView>
    </PageContainer>
  );
};
export default Main;
