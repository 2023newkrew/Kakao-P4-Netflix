import useUserStore from '@/stores/use-user-store';
import { MyProfileContainer, MyProfileEmail, MyProfileName, MyProfileTitle } from './styles';

const MyProfile = () => {
  const { user } = useUserStore();

  const { userName, email, firstName, lastName } = user || {};

  return (
    <MyProfileContainer>
      <MyProfileTitle>안녕하세요, {userName}님!</MyProfileTitle>
      <MyProfileEmail>{email}</MyProfileEmail>
      {firstName && lastName && <MyProfileName>{`${firstName}, ${lastName}`}</MyProfileName>}
    </MyProfileContainer>
  );
};

export default MyProfile;
