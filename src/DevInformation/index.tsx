import { Box } from "@mui/material";
import { DevInformationContainer } from "./style";
import ProfilePicture from "./ProfilePicture";

const DevInformation = () => {
  return (
    <DevInformationContainer item xs={12} id="dev-information-container">
      <ProfilePicture />
    </DevInformationContainer>
  );
};

export default DevInformation;
