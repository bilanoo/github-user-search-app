import { ProfilePictureContainer } from "./style";

const ProfilePicture = () => {
  const profilePictureStyles = {
    maxWidth: "120px",
    borderRadius: "100px",
    marginTop: "30px",
    marginLeft: "30px",
  };
  return (
    <ProfilePictureContainer id="dev-profile-picture-container">
      <img
        src={"https://avatars.githubusercontent.com/u/583231?v=4"}
        style={profilePictureStyles}
        alt="github-user-profile"
      />
    </ProfilePictureContainer>
  );
};

export default ProfilePicture;
