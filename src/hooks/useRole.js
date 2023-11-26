import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getUser } from "../api/apiUsers";

const useRole = () => {
  const { user, loading } = useAuth();

  const { data, error, isLoading } = useQuery({
    disabled: loading || !user?.email,
    queryKey: ["role", user?.email],
    queryFn: async () => await getUser(user?.email),
  });

  return {
    role: data?.role || "user",
    error,
    isLoading,
  };
};

export default useRole;
