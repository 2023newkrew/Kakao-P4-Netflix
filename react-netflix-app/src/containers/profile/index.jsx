import Spacer from '@/components/common/spacer';
import ChangeProfileForm from '@/components/profile/change-profile-form';
import MyProfile from '@/components/profile/my-profile';
import CommonLayout from '@/layout/common-layout';

const Profile = () => (
  <CommonLayout>
    <Spacer height="32px" />
    <MyProfile />
    <ChangeProfileForm />
  </CommonLayout>
);

export default Profile;
