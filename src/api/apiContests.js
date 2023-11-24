import { axiosPublic, axiosSecure } from ".";

// Get all contests
export const getAllContests = async () => {
  const { data } = await axiosPublic.get("/contests");
  return data;
};

// Get contest by id
export const getContestById = async (id) => {
  const { data } = await axiosPublic.get(`/contests/${id}`);
  return data;
};

// Save a contest in DB
export const saveContest = async (contest) => {
  const { data } = await axiosSecure.post("/contests", contest);
  return data;
};

// Update a contest in DB
export const updateContest = async (id, contest) => {
  const { data } = await axiosSecure.patch(`/contests/${id}`, contest);
  return data;
};

// Delete a contest in DB
export const deleteContest = async (id) => {
  const { data } = await axiosSecure.delete(`/contests/${id}`);
  return data;
};
