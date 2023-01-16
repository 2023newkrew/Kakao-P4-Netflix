import tw, { styled } from 'twin.macro';

const PageContainer = tw.div`bg-[#123123] h-full w-full`;
const Header = styled.header`
  background: #1e293b;
  ${tw`text-white`};
`;
function App() {
  return (
    <PageContainer>
      <Header>헤더</Header>
    </PageContainer>
  );
}

export default App;
