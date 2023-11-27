import { useQuery } from "@tanstack/react-query";
import { getContestForAdmin } from "../api/apiContests";
import { useSearchParams } from "react-router-dom";

const useContestForAdmin = () => {
  const [searchParams] = useSearchParams();

  // PAGINATION
  const page = Number(searchParams.get("page")) || 1;

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["contests", "admin", page],
    queryFn: () => getContestForAdmin(page),
  });

  return {
    contests: data?.result || [],
    count: data?.count || 0,
    error,
    isLoading,
    refetch,
  };
};

export default useContestForAdmin;
