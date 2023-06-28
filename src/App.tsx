import "./App.css";
import Header from "./Header";
import { Grid } from "@mui/material";
import SearchBar from "./SearchBar";

function App() {
  return (
    <>
      <Grid
        container
        flexDirection={"column"}
        sx={{
          maxWidth: "40%",
          minHeight: "80vh",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Header />
        <SearchBar />
      </Grid>
    </>
  );
}

export default App;
