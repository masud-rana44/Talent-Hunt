import { useQuery } from "@tanstack/react-query";
import { getContestByCreator } from "../api/apiContests";
import useUser from "./useUser";

const useContestByCreator = () => {
  const { userData } = useUser();

  const {
    data: contests = [],
    error,
    isLoading,
    refetch,
  } = useQuery({
    enabled: !!userData,
    queryKey: ["contestByCreator"],
    queryFn: async () => await getContestByCreator(userData?._id),
  });
  return { contests, refetch, error, isLoading };
};

export default useContestByCreator;
