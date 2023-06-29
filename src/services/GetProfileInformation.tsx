import { useQuery } from "@tanstack/react-query";
import { useDevInformationStore } from "../store/DevInformation.store";

export const GetProfileInformation = () => {
  const { setDevInformation } = useDevInformationStore((state) => state);
  const fetchDevInformation = async () => {
    const response = await fetch("https://api.github.com/users/bilanoo").then(
      (response) => response.json()
    );

    return response;
  };
  const { data, fetchStatus, isLoading } = useQuery(
    ["user"],
    fetchDevInformation
  );

  return { data, fetchStatus, isLoading };
};
