import { useQuery } from "@tanstack/react-query";
import { getContestById } from "../api/apiContests";

const useContestById = (id) => {
  const {
    data: contest = {},
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["contestById", id],
    queryFn: async () => await getContestById(id),
  });
  return { contest, error, isLoading, refetch };
};

export default useContestById;
