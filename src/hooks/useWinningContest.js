import { useQuery } from "@tanstack/react-query";
import { getWinningContests } from "../api/apiContests";
import useUser from "./useUser";

const useWinningContest = () => {
  const { userData, isLoading: isUserLoading } = useUser();

  const {
    data: contests,
    error,
    isLoading,
  } = useQuery({
    disabled: isUserLoading || !userData,
    queryKey: ["winningContest", userData?._id],
    queryFn: async () => await getWinningContests(userData?._id),
  });

  return { contests, error, isLoading };
};

export default useWinningContest;
