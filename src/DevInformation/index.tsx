import { Box, Typography } from "@mui/material";
import {
  InformationValue,
  BioContainer,
  CreationDate,
  DevInformationContainer,
  DevProfileContainer,
  ProfileName,
  ProfileNameandDateContainer,
  InformationContainer,
  InformationTitle,
  ReposAndFollowersContainer,
  UsernameContainer,
} from "./style";
import ProfilePicture from "./ProfilePicture";

const DevInformation = () => {
  return (
    <DevInformationContainer item xs={12} id="dev-information-container">
      <ProfilePicture />
      <DevProfileContainer>
        <ProfileNameandDateContainer>
          <ProfileName>The Octocat</ProfileName>
          <CreationDate>Joined 25 Jan 2011</CreationDate>
        </ProfileNameandDateContainer>
        <UsernameContainer>@octocat</UsernameContainer>
        <BioContainer>This profile has no bio</BioContainer>
        <ReposAndFollowersContainer>
          <InformationContainer>
            <InformationTitle>Repos</InformationTitle>
            <InformationValue>8</InformationValue>
          </InformationContainer>
          <InformationContainer>
            <InformationTitle>Followers</InformationTitle>
            <InformationValue>9644</InformationValue>
          </InformationContainer>
          <InformationContainer>
            <InformationTitle>Following</InformationTitle>
            <InformationValue>9</InformationValue>
          </InformationContainer>
        </ReposAndFollowersContainer>
      </DevProfileContainer>
    </DevInformationContainer>
  );
};

export default DevInformation;
