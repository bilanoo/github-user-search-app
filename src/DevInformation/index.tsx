import { Box, Typography } from "@mui/material";
import {
  BioContainer,
  CreationDate,
  DevInformationContainer,
  DevProfileContainer,
  ProfileName,
  ProfileNameandDateContainer,
  UsernameContainer,
} from "./style";
import ProfilePicture from "./ProfilePicture";
import ContactInformation from "./ContactInformation";
import ReposAndFollowersInformation from "./ReposAndFollowersInformation";

const DevInformation = () => {
  return (
    <DevInformationContainer item xs={6} id="dev-information-container">
      <ProfilePicture />
      <DevProfileContainer>
        <ProfileNameandDateContainer>
          <ProfileName>The Octocat</ProfileName>
          <CreationDate>Joined 25 Jan 2011</CreationDate>
        </ProfileNameandDateContainer>
        <UsernameContainer>@octocat</UsernameContainer>
        <BioContainer>This profile has no bio</BioContainer>
        <ReposAndFollowersInformation />
        <ContactInformation />
      </DevProfileContainer>
    </DevInformationContainer>
  );
};

export default DevInformation;
