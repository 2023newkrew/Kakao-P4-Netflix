import { User, signInWithPopup, signOut } from 'firebase/auth';
import useFirebaseGoogleAuth from '@utilHooks/useFirebaseGoogleAuth';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate();
  const { provider, auth } = useFirebaseGoogleAuth();

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/browse', { replace: true });
    } catch (error) {
      console.error(error);
    }
  };
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };
  return { handleSignIn, handleSignOut };
};
export default useAuth;
