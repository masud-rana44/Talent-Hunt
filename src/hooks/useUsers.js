import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api/apiUsers";

const useUsers = () => {
  const {
    data: users = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  return { users, error, isLoading };
};

export default useUsers;
