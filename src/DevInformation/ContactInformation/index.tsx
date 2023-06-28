import {
  ContactInformationContainer,
  ContactInformationText,
  DevPersonalInformation,
} from "./style";
import locationIcon from "../../assets/icon-location.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import linkIcon from "../../assets/icon-website.svg";
import companyIcon from "../../assets/icon-company.svg";
const ContactInformation = () => {
  const iconStyles = {
    width: "20px",
    height: "20px",
    filter: "brightness(1000%)",
    marginRight: "20px",
  };
  return (
    <>
      <DevPersonalInformation>
        <ContactInformationContainer>
          <img src={locationIcon} style={iconStyles} />
          <ContactInformationText>San Francisco</ContactInformationText>
        </ContactInformationContainer>
        <ContactInformationContainer>
          <img src={linkIcon} style={iconStyles} />
          <ContactInformationText>https://github.blog</ContactInformationText>
        </ContactInformationContainer>
        <ContactInformationContainer>
          <img src={twitterIcon} style={iconStyles} />
          <ContactInformationText>Not available</ContactInformationText>
        </ContactInformationContainer>
        <ContactInformationContainer>
          <img src={companyIcon} style={iconStyles} />
          <ContactInformationText>@github</ContactInformationText>
        </ContactInformationContainer>
      </DevPersonalInformation>
    </>
  );
};

export default ContactInformation;
