import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getRole } from "../api/apiAuth";

const useRole = () => {
  const { user, loading } = useAuth();

  const {
    data: role,
    error,
    isLoading,
  } = useQuery({
    disabled: loading || !user,
    queryKey: ["role", user?.email],
    queryFn: async () => await getRole(user?.email),
  });

  return {
    role,
    error,
    isLoading,
  };
};

export default useRole;
