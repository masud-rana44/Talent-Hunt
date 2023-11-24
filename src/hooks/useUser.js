import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getUser } from "../api/apiAuth";

const useRole = () => {
  const { user, loading } = useAuth();

  const {
    data: userData,
    error,
    isLoading,
  } = useQuery({
    disabled: loading || !user,
    queryKey: ["user", user?.email],
    queryFn: async () => await getUser(user?.email),
  });

  return {
    userData,
    error,
    isLoading,
  };
};

export default useRole;
