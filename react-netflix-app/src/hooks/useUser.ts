import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import useFirebaseGoogleAuth from '@utilHooks/useFirebaseGoogleAuth';
import useSyncLocalStorage from '@utilHooks/useSyncLocalStorage';

const useUser = () => {
  const { auth } = useFirebaseGoogleAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {
    state: userData,
    setItem: setUserData,
    removeItem: removeUserData,
  } = useSyncLocalStorage<User | null>('user');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserData(user);
      } else {
        setIsLoggedIn(false);
        removeUserData();
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  return { isLoggedIn, userData };
};
export default useUser;
