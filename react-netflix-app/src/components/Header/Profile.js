// import "../../scss/header/profile.scss";
import "@scss/header/profile.scss";

import profileIcon from "@assets/profile-icon.png";

const Profile = () => {
  return (
    <div className="profile_container">
      <img src={profileIcon} alt="프로필 아이콘" />
    </div>
  );
};

export default Profile;
