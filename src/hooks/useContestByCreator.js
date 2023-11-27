import { useQuery } from "@tanstack/react-query";
import { getContestByCreator } from "../api/apiContests";
import useUser from "./useUser";
import { useSearchParams } from "react-router-dom";

const useContestByCreator = () => {
  const { userData } = useUser();
  const [searchParams] = useSearchParams();

  // PAGINATION
  const page = Number(searchParams.get("page")) || 1;

  const { data, error, isLoading, refetch } = useQuery({
    enabled: !!userData,
    queryKey: ["contestByCreator", page],
    queryFn: async () => await getContestByCreator(userData?._id, page),
  });
  return {
    contests: data?.contests || [],
    count: data?.count || 0,
    refetch,
    error,
    isLoading,
  };
};

export default useContestByCreator;
