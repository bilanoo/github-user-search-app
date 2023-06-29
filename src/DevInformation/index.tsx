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
import { GetProfileInformation } from "../services/GetProfileInformation";
import { useDevInformationStore } from "../store/DevInformation.store";
import { useLayoutEffect } from "react";

const DevInformation = () => {
  const { data, fetchStatus, isLoading } = GetProfileInformation();
  const { devInformation, setDevInformation } = useDevInformationStore(
    (state) => state
  );

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  useLayoutEffect(() => {
    if (data) {
      setDevInformation(data);
    }
  }, [data]);

  console.log(devInformation);
  return (
    <DevInformationContainer item xs={6} id="dev-information-container">
      <ProfilePicture />
      <DevProfileContainer>
        <ProfileNameandDateContainer>
          <ProfileName>
            {devInformation?.name ? devInformation?.name : devInformation.login}
          </ProfileName>
          <CreationDate>
            Joined {formatDate(devInformation.created_at)}
          </CreationDate>
        </ProfileNameandDateContainer>
        <UsernameContainer>@{devInformation.login}</UsernameContainer>
        <BioContainer>
          {devInformation.bio ? devInformation.bio : "This profile has no bio"}
        </BioContainer>
        <ReposAndFollowersInformation />
        <ContactInformation />
      </DevProfileContainer>
    </DevInformationContainer>
  );
};

export default DevInformation;
