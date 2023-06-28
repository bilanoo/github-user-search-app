import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const ReposAndFollowersContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "row",
    borderRadius: "10px",
    backgroundColor: "#141D2F",
    minWidth: "90%",
    minHeight: "20%",
    fontWeight: "bold",
    marginTop: "30px",
    marginRight: "40px",
  },
}));

export const InformationContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    backgroundColor: "#141D2F",
    minHeight: "20%",
    fontWeight: "bold",
    marginTop: "20px",
    marginRight: "40px",
  },
}));

export const InformationTitle = styled(Typography)(() => ({
  "&": {
    fontSize: "13px",
    color: "white",
    fontFamily: "Space Mono, monospace",
    marginRight: "40px",
    marginLeft: "37px",
  },
}));

export const InformationValue = styled(Typography)(() => ({
  "&": {
    fontSize: "28px",
    fontWeight: "bold",
    color: "white",
    fontFamily: "Space Mono, monospace",
    marginRight: "40px",
    marginLeft: "37px",
  },
}));
