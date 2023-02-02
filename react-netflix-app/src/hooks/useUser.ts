import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import useFirebaseGoogleAuth from '@utilHooks/useFirebaseGoogleAuth';

const useUser = () => {
  const { auth } = useFirebaseGoogleAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        console.log(user);
        setUserData(user);
      } else {
        setIsLoggedIn(false);
        setUserData(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  return { isLoggedIn, userData };
};
export default useUser;
