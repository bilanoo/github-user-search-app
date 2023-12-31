import { CSSProperties } from "react";
import sunIcon from "../assets/icon-sun.svg";
import {
  DarkOrLightMode,
  useDevInformationStore,
} from "../store/DevInformation.store";

const Header = () => {
  const titleHeaderStyles = {
    color: "white",
  };

  const headingContainerStyles: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    minWidth: "100%",
    maxHeight: "10vh",
  };

  const buttonContainerStyles: CSSProperties = {
    display: "flex",
    width: "90px",
    justifyContent: "space-between",
    color: "white",
    letterSpacing: "2.5px",
    fontWeight: "bold",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "auto",
    cursor: "pointer",
  };

  const { updateLightOrDarkMode, darkOrLightMode } = useDevInformationStore(
    (state) => state
  );

  function handleLightOrDarkModeSwitch() {
    const newMode =
      darkOrLightMode === DarkOrLightMode.LIGHT
        ? DarkOrLightMode.DARK
        : DarkOrLightMode.LIGHT;
    updateLightOrDarkMode(newMode);
  }

  console.log(darkOrLightMode);
  return (
    <>
      <header style={headingContainerStyles}>
        <h1 style={titleHeaderStyles}> devfinder</h1>
        <div
          style={buttonContainerStyles}
          onClick={handleLightOrDarkModeSwitch}
        >
          <p>LIGHT</p>
          <img src={sunIcon} alt="sun-icon" />
        </div>
      </header>
    </>
  );
};

export default Header;
