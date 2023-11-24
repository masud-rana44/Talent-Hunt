import { axiosSecure } from ".";

// generate the token
export const generateToken = async (email) => {
  const { data } = await axiosSecure.post("/jwt", { email });
  return data;
};

// save the user in the database
export const saveUser = async (user) => {
  const { data } = await axiosSecure.post(`/users/${user.email}`, {
    name: user?.displayName,
    email: user?.email,
    image: user?.photoURL,
  });

  return data;
};

// get role
export const getRole = async (email) => {
  const { data } = await axiosSecure.get(`/users/${email}`);
  return data.role || "user";
};

// get user by email
export const getUser = async (email) => {
  const { data } = await axiosSecure.get(`/users/${email}`);
  return data;
};

// remove cookie
export const clearCookie = async () => {
  const { data } = await axiosSecure.get("/logout");
  return data;
};
