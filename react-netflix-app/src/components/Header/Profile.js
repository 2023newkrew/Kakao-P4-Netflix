import profileIcon from "@assets/profile-icon.png";

import { ProfileContainer } from "./Profile.style";

const Profile = () => {
  return (
    <ProfileContainer>
      <img src={profileIcon} alt="프로필 아이콘" />
    </ProfileContainer>
  );
};

export default Profile;
