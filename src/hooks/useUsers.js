import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api/apiUsers";
import { useSearchParams } from "react-router-dom";

const useUsers = () => {
  const [searchParams] = useSearchParams();

  // PAGINATION
  const page = Number(searchParams.get("page")) || 1;

  const { data, error, isLoading } = useQuery({
    queryKey: ["users", page],
    queryFn: () => getAllUsers(page),
  });

  return { users: data?.users || [], count: data?.count, error, isLoading };
};

export default useUsers;
