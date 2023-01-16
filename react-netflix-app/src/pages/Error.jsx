import { useRouteError } from 'react-router-dom';
import tw from 'twin.macro';

const PageContainer = tw.div`
  flex w-full flex-col items-center justify-center
`;

const ErrorTitle = tw.h1`
  mb-2 text-2xl font-bold
`;
const ErrorDescription = tw.p`
  mb-1
`;
const ErrorMessage = tw.i`
  font-light
  text-gray-500
`;

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <PageContainer id="error-page">
      <ErrorTitle>Oops!</ErrorTitle>
      <ErrorDescription>죄송합니다. 예상치 못한 오류가 발생하였습니다.</ErrorDescription>
      <ErrorDescription>
        <ErrorMessage>{error.statusText || error.message}</ErrorMessage>
      </ErrorDescription>
    </PageContainer>
  );
}
