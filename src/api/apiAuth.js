import { axiosSecure } from ".";

// generate the token
export const generateToken = async (email) => {
  const { data } = await axiosSecure.post("/jwt", { email });
  return data;
};

// save the user in the database
export const saveUser = async (user) => {
  const { data } = await axiosSecure.put(`/users/${user.email}`, {
    name: user?.displayName,
    email: user?.email,
    image: user?.photoURL,
    role: "user",
    status: "verified",
    createdAt: Date.now(),
  });

  return data;
};

// get role
export const getRole = async (email) => {
  const { data } = await axiosSecure.get(`/users/${email}`);
  return data.role || "user";
};

// remove cookie
export const clearCookie = async () => {
  const { data } = await axiosSecure.get("/logout");
  return data;
};
