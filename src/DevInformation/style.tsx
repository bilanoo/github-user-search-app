import { Box, Grid, Typography, styled } from "@mui/material";

export const DevInformationContainer = styled(Grid)(() => ({
  "&": {
    backgroundColor: "#1E2A47",
    borderRadius: "14px",
    display: "flex",
    minWidth: "100%",
    minHeight: "50vh",
    marginTop: "20px",
  },
}));

export const DevProfileContainer = styled(Box)(() => ({
  "&": {
    marginLeft: "auto",
    minWidth: "60vh",
  },
}));

export const ProfileNameandDateContainer = styled(Box)(() => ({
  "&": {
    marginTop: "40px",
    minWidth: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
}));

export const ProfileName = styled(Typography)(() => ({
  "&": {
    fontSize: "26px",
    fontWeight: "bold",
    color: "white",
    fontFamily: "Space Mono, monospace",
  },
}));

export const CreationDate = styled(Typography)(() => ({
  "&": {
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
    fontFamily: "Space Mono, monospace",
    marginRight: "40px",
    marginTop: "auto",
  },
}));

export const UsernameContainer = styled(Box)(() => ({
  "&": {
    marginTop: "10px",
    minWidth: "100%",
    display: "flex",
    justifyContent: "space-between",
    color: "#0079ff",
  },
}));

export const BioContainer = styled(Box)(() => ({
  "&": {
    marginTop: "30px",
    minWidth: "100%",
    color: "#C7CAD1",
    fontWeight: "bold",
  },
}));

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
