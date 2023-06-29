import {
  ContactInformationContainer,
  ContactInformationText,
  DevPersonalInformation,
} from "./style";
import locationIcon from "../../assets/icon-location.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import linkIcon from "../../assets/icon-website.svg";
import companyIcon from "../../assets/icon-company.svg";
import { useDevInformationStore } from "../../store/DevInformation.store";
const ContactInformation = () => {
  const iconStyles = {
    width: "20px",
    height: "20px",
    filter: "brightness(1000%)",
    marginRight: "20px",
  };
  const isTheInformationAvailable = (devInformationProvided: string) => {
    return devInformationProvided ? devInformationProvided : "Not Available";
  };
  const { devInformation } = useDevInformationStore((state) => state);
  return (
    <>
      <DevPersonalInformation>
        <ContactInformationContainer>
          <img src={locationIcon} style={iconStyles} alt="location-icon" />
          <ContactInformationText>
            {isTheInformationAvailable(devInformation?.location)}
          </ContactInformationText>
        </ContactInformationContainer>
        <ContactInformationContainer>
          <img src={linkIcon} style={iconStyles} alt="link-chain-icon" />
          <ContactInformationText>
            {isTheInformationAvailable(devInformation?.blog)}
          </ContactInformationText>
        </ContactInformationContainer>
        <ContactInformationContainer>
          <img src={twitterIcon} style={iconStyles} alt="twitter-icon" />
          <ContactInformationText>
            {isTheInformationAvailable(devInformation?.twitter)}
          </ContactInformationText>
        </ContactInformationContainer>
        <ContactInformationContainer>
          <img src={companyIcon} style={iconStyles} alt="company-icon" />
          <ContactInformationText>
            {isTheInformationAvailable(devInformation?.company)}
          </ContactInformationText>
        </ContactInformationContainer>
      </DevPersonalInformation>
    </>
  );
};

export default ContactInformation;
