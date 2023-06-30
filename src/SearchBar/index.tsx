import { InputAdornment } from "@mui/material";
import searchIcon from "../assets/icon-search.svg";
import { SearchButton, SearchContainer, SearchField } from "./styles";
import { useDevInformationStore } from "../store/DevInformation.store";
import { useRef } from "react";

const SearchBar = () => {
  const formStyle = {
    display: "flex",
    minWidth: "100%",
    justifyContent: "space-between",
  };

  const { updateSearchedValue, devInformation } = useDevInformationStore(
    (state) => state
  );
  const inputRef = useRef<any>(null); // Explicitly set the type as HTMLInputElement | null

  function searchforProfile(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const searchedProfile = inputRef.current?.value;
    console.log(searchedProfile);
    if (searchedProfile) {
      updateSearchedValue(searchedProfile);
    }
  }

  return (
    <>
      <SearchContainer item xs={12}>
        <form style={formStyle} noValidate onSubmit={searchforProfile}>
          <SearchField
            id="search-text-field"
            variant="standard"
            sx={{ color: "white" }}
            inputRef={inputRef}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ marginLeft: "30px" }}>
                  <img src={searchIcon} style={formStyle} alt="search-icon" />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          ></SearchField>
          <SearchButton type="submit">Search</SearchButton>
        </form>
      </SearchContainer>
    </>
  );
};

export default SearchBar;
