import { useDevInformationStore } from "../../store/DevInformation.store";
import { ProfilePictureContainer } from "./style";

const ProfilePicture = () => {
  const profilePictureStyles = {
    maxWidth: "120px",
    borderRadius: "100px",
    marginTop: "30px",
    marginLeft: "30px",
  };

  const { devInformation } = useDevInformationStore((state) => state);
  return (
    <ProfilePictureContainer id="dev-profile-picture-container">
      <img
        src={devInformation?.avatar_url}
        style={profilePictureStyles}
        alt="github-user-profile"
      />
    </ProfilePictureContainer>
  );
};

export default ProfilePicture;
