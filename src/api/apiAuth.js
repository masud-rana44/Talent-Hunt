import { axiosSecure } from ".";

// generate the token
export const generateToken = async (email) => {
  const { data } = await axiosSecure.post("/jwt", { email });
  return data;
};

// save the user in the database
export const saveUser = async (user) => {
  const { data } = await axiosSecure.put(`/users/${user.email}`, {
    email: user.email,
    role: "guest",
    status: "verified",
  });

  return data;
};

// remove cookie
export const clearCookie = async () => {
  const { data } = await axiosSecure.get("/logout");
  return data;
};
