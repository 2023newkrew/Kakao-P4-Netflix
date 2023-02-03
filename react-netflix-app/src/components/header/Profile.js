import { ProfileContainer } from "@styles/header/Profile.style";

import profileIcon from "@assets/profile-icon.png";

const Profile = () => {
  return (
    <ProfileContainer>
      <img src={profileIcon} alt="프로필 아이콘" />
    </ProfileContainer>
  );
};

export default Profile;
