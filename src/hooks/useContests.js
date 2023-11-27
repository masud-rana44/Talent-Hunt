import { useQuery } from "@tanstack/react-query";
import { getAllContests } from "../api/apiContests";
import { useSearchParams } from "react-router-dom";

const useContests = () => {
    const [searchParams] = useSearchParams();

  // PAGINATION
  const page = Number(searchParams.get("page")) || 1;

  const {
    data: contests = [],
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["contests", page],
    queryFn: () => getAllContests(page),
  });
  return { contests, error, isLoading, refetch };
};

export default useContests;
