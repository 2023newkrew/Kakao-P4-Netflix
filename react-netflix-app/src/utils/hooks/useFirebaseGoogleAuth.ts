import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import firebaseApp from '@/firebase';

const useFirebaseGoogleAuth = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebaseApp);

  return { provider, auth };
};
export default useFirebaseGoogleAuth;
