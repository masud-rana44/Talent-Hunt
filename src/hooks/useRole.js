import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getUser } from "../api/apiUsers";

const useRole = () => {
  const { user } = useAuth();

  const { data, error, isLoading } = useQuery({
    disabled: !user?.email,
    queryKey: ["role", user?.email],
    queryFn: async () => await getUser(user?.email),
  });

  return {
    role: data?.role,
    error,
    isLoading,
  };
};

export default useRole;
