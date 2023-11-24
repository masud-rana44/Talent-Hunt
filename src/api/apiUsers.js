import { axiosSecure } from ".";

export const getAllUsers = async () => {
  const { data } = await axiosSecure.get("/users");
  return data;
};

export const updateUser = async (id, user) => {
  const { data } = await axiosSecure.patch(`/users/${id}`, user);
  return data;
};
