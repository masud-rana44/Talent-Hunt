import { useQuery } from "@tanstack/react-query";
import { getContestByIdForCreator } from "../api/apiContests";
import useUser from "./useUser";

const useContestByIdForCreator = (contestId) => {
  const { userData } = useUser();

  const {
    data: contest,
    error,
    isLoading,
    refetch,
  } = useQuery({
    enabled: !!userData,
    queryKey: ["contestByIdForCreator"],
    queryFn: async () =>
      await getContestByIdForCreator(contestId, userData?._id),
  });
  return { contest, refetch, error, isLoading };
};

export default useContestByIdForCreator;
