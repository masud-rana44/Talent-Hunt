import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getUser } from "../api/apiUsers";

const useUser = () => {
  const { user, loading } = useAuth();

  const {
    data: userData,
    error,
    isLoading,
    refetch,
  } = useQuery({
    disabled: loading || !user?.email,
    queryKey: ["userData", user?.email],
    queryFn: async () => await getUser(user?.email),
  });

  return {
    userData,
    error,
    isLoading,
    refetch,
  };
};

export default useUser;
