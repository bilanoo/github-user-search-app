import {
  InformationContainer,
  InformationTitle,
  InformationValue,
  ReposAndFollowersContainer,
} from "./style";

const ReposAndFollowersInformation = () => {
  return (
    <>
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
    </>
  );
};

export default ReposAndFollowersInformation;
