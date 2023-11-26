import { axiosSecure } from ".";

export const getAllUsers = async () => {
  const { data } = await axiosSecure.get("/users");
  return data;
};

// get user by email
export const getUser = async (email) => {
  const { data } = await axiosSecure.get(`/users/${email}`);
  return data;
};

export const updateUser = async (id, user) => {
  const { data } = await axiosSecure.patch(`/users/${id}`, user);
  return data;
};
