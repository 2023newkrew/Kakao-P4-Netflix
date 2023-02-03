import styled from "styled-components";
import KakaoLogin from "react-kakao-login";

import { setCookie } from "@utils/cookie.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const token = process.env.REACT_APP_KAKAO_TOKEN;
  const navigate = useNavigate();

  const onSuccess = (response) => {
    const accessToken = response.response.access_token;
    setCookie("accessToken", accessToken);
    navigate(0);
  };

  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <KakaoLogin token={token} onSuccess={onSuccess} />
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: url("https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/2108183d-fee2-43b6-9232-8cf942f0af4b/KR-ko-20230130-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const LoginWrapper = styled.div`
  width: 400px;
  height: 400px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  background-color: rgba(14, 14, 14, 0.9);

  button {
    cursor: pointer;
  }
`;
