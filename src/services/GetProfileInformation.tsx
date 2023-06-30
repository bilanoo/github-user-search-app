import { useQuery } from "@tanstack/react-query";
import { useDevInformationStore } from "../store/DevInformation.store";

export const GetProfileInformation = () => {
  const { devInformation } = useDevInformationStore((state) => state);
  const fetchDevInformation = async () => {
    const username = devInformation.searchedValue || "octocat";
    const response = await fetch(
      `https://api.github.com/users/${username}`
    ).then((response) => response.json());

    return response;
  };
  const { data, fetchStatus, isLoading } = useQuery(
    ["user", devInformation.searchedValue],
    fetchDevInformation
  );

  return { data, fetchStatus, isLoading };
};
