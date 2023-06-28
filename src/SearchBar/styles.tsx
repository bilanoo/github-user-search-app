import styled from "@emotion/styled";
import { Button, Grid, TextField } from "@mui/material";

export const SearchField = styled(TextField)(() => ({
  "&": {
    minWidth: "50%",
    display: "flex",
    position: "relative",
    marginTop: "auto",
    marginBottom: "auto",
    color: "white",
  },
  input: {
    color: "white",
    fontSize: "18px",
    fontFamily: "Space Mono, monospace",
    fontWeight: "bold",
  },
}));

export const SearchContainer = styled(Grid)(() => ({
  "&": {
    backgroundColor: "#1E2A47",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "space-between",
    minWidth: "100%",
    minHeight: "60px",
    marginTop: "0",
  },
}));

export const SearchButton = styled(Button)(() => ({
  "&": {
    fontFamily: "Space Mono, monospace",
    color: "white",
    fontSize: "14px",
    fontWeight: "bold",
    marginRight: "10PX",
    height: "50px",
    marginTop: "auto",
    marginBottom: "auto",
    backgroundColor: "#0079ff",
    borderRadius: "12px",
    paddingLeft: "20px",
    paddingRight: "20px",
    textTransform: "none",
  },
  "&:hover": {
    backgroundColor: "#60abff",
  },
}));
