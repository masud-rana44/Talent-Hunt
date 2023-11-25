import { useQuery } from "@tanstack/react-query";
import { getContestForAdmin } from "../api/apiContests";

const useContestForAdmin = () => {
  const {
    data: contests = [],
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["contests", "admin"],
    queryFn: getContestForAdmin,
  });
  return { contests, error, isLoading, refetch };
};

export default useContestForAdmin;
