import { create } from "zustand";

export enum DarkOrLightMode {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

interface DevInformationStore {
  devInformation: any;
  darkOrLightMode: DarkOrLightMode;
  setDevInformation: (data: any) => void;
  updateSearchedValue: (profileToSearch: string) => void;
  updateLightOrDarkMode: (mode: DarkOrLightMode) => void;
}

export const useDevInformationStore = create<DevInformationStore>((set) => ({
  devInformation: {
    searchedValue: "octocat",
  },
  darkOrLightMode: DarkOrLightMode.LIGHT,
  setDevInformation: (data: any) => {
    set((prevState) => ({
      devInformation: {
        ...prevState.devInformation,
        ...data,
      },
    }));
  },
  updateSearchedValue: (profileToSearch: string) => {
    set((prevState) => ({
      devInformation: {
        ...prevState.devInformation,
        searchedValue: profileToSearch,
      },
    }));
  },
  updateLightOrDarkMode: (mode: DarkOrLightMode) => {
    set((prevState) => ({
      darkOrLightMode: mode,
    }));
  },
}));
