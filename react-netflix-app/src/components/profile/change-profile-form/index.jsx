import { useCallback, useState } from 'react';
import { updateAccount } from '@/apis/account';
import { LOCAL_STORAGE_ACCESS_TOKEN } from '@/constants/storage';
import useUserStore from '@/stores/use-user-store';
import {
  ChangeProfileButton,
  ChangeProfileFormContainer,
  ChangeProfileInput,
  ChangeProfileLabel,
} from './styles';

const ChangeProfileForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { setUser } = useUserStore();

  const requestChangeProfile = useCallback(
    (firstName, lastName) => {
      const accessToken = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN);

      if (!accessToken) return;

      updateAccount(accessToken, firstName, lastName)
        .then(() => {
          setUser({ firstName, lastName });
        })
        .catch((error) => {
          setErrorMessage(error.response.data.detail);
        });
    },
    [setUser],
  );

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const { firstName, lastName } = event.target.elements;
      requestChangeProfile(firstName.value, lastName.value);
    },
    [requestChangeProfile],
  );

  return (
    <ChangeProfileFormContainer onSubmit={onSubmit}>
      <ChangeProfileLabel htmlFor="firstName">
        First Name
        <ChangeProfileInput type="text" id="firstName" />
      </ChangeProfileLabel>
      <ChangeProfileLabel htmlFor="lastName">
        Last Name
        <ChangeProfileInput type="text" id="lastName" />
      </ChangeProfileLabel>
      <ChangeProfileButton type="submit">Change Profile</ChangeProfileButton>
      {errorMessage && <p>{errorMessage}</p>}
    </ChangeProfileFormContainer>
  );
};

export default ChangeProfileForm;
