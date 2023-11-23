import { useQuery } from "@tanstack/react-query";
import { getAllContests } from "../api/apiContests";

const useContests = () => {
  const {
    data: contests = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["contests"],
    queryFn: getAllContests,
  });
  return { contests, error, isLoading };
};

export default useContests;
