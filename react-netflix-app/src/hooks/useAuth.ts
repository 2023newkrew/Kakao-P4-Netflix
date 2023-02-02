import { signInWithPopup, signOut } from 'firebase/auth';
import useFirebaseGoogleAuth from '@utilHooks/useFirebaseGoogleAuth';

const useAuth = () => {
  const { provider, auth } = useFirebaseGoogleAuth();

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };
  return { handleSignIn, handleSignOut };
};
export default useAuth;
