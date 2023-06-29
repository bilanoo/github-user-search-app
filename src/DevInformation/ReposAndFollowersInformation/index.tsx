import { useDevInformationStore } from "../../store/DevInformation.store";
import {
  InformationContainer,
  InformationTitle,
  InformationValue,
  ReposAndFollowersContainer,
} from "./style";

const ReposAndFollowersInformation = () => {
  const { devInformation } = useDevInformationStore((state) => state);
  return (
    <>
      <ReposAndFollowersContainer>
        <InformationContainer>
          <InformationTitle>Repos</InformationTitle>
          <InformationValue>{devInformation?.public_repos}</InformationValue>
        </InformationContainer>
        <InformationContainer>
          <InformationTitle>Followers</InformationTitle>
          <InformationValue>{devInformation?.followers}</InformationValue>
        </InformationContainer>
        <InformationContainer>
          <InformationTitle>Following</InformationTitle>
          <InformationValue>{devInformation?.following}</InformationValue>
        </InformationContainer>
      </ReposAndFollowersContainer>
    </>
  );
};

export default ReposAndFollowersInformation;
