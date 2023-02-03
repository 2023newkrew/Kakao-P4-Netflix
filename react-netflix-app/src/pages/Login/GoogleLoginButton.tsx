import { GoogleButton } from './Login.style';
import { ReactComponent as GoogleIcon } from '@icons/google_normal.svg';
import useAuth from '@hooks/useAuth';

const GoogleLoginButton = () => {
  const { handleSignIn } = useAuth();
  return (
    <GoogleButton onClick={handleSignIn}>
      <GoogleIcon />
      Google로 로그인하기
    </GoogleButton>
  );
};
export default GoogleLoginButton;
