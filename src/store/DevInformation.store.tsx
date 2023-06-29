import { create } from "zustand";

interface DevInformationStore {
  devInformation: any;
  setDevInformation: (data: any) => void;
}

export const useDevInformationStore = create<DevInformationStore>((set) => ({
  devInformation: {},
  setDevInformation: (data: any) => {
    set(() => {
      return { devInformation: data };
    });
  },
}));
