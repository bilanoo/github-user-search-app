import { InputAdornment } from "@mui/material";
import searchIcon from "../assets/icon-search.svg";
import { SearchButton, SearchContainer, SearchField } from "./styles";

const SearchBar = () => {
  const searchIconStyle = {};
  return (
    <>
      <SearchContainer item xs={12}>
        <SearchField
          id="search-text-field"
          variant="standard"
          sx={{ color: "white" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ marginLeft: "30px" }}>
                <img
                  src={searchIcon}
                  style={searchIconStyle}
                  alt="search-icon"
                />
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
        ></SearchField>
        <SearchButton>Search</SearchButton>
      </SearchContainer>
    </>
  );
};

export default SearchBar;
