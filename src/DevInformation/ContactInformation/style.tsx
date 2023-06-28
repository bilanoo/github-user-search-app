import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const DevPersonalInformation = styled(Box)(() => ({
  "&": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr", // Two columns per row
    gap: "20px", // Spacing between columns
    marginTop: "20px",
  },
}));

export const ContactInformationContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
  },
}));

export const ContactInformationText = styled(Typography)(() => ({
  "&": {
    fontWeight: "bold",
    color: "white",
    fontFamily: "Space Mono, monospace",
    marginLeft: "10px",
  },
}));
