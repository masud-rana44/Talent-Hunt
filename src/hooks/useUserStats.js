import { useQuery } from "@tanstack/react-query";
import { getUserStats } from "../api/apiContests";

const useUserStats = () => {
  const {
    data: stats,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["user-stats"],
    queryFn: () => getUserStats(),
  });

  return { stats, error, isLoading };
};

export default useUserStats;
