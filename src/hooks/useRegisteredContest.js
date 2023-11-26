import { useQuery } from "@tanstack/react-query";
import { getRegisteredContests } from "../api/apiContests";
import useUser from "./useUser";

const useRegisteredContest = () => {
  const { userData, isLoading: isUserLoading } = useUser();

  const {
    data: contests,
    error,
    isLoading,
  } = useQuery({
    disabled: !userData,
    queryKey: ["registeredContest", userData?._id],
    queryFn: async () => await getRegisteredContests(userData?._id),
  });

  return { contests, error, isLoading };
};

export default useRegisteredContest;
