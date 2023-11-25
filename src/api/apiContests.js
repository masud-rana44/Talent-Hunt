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

// Get contest by creator
export const getContestByCreator = async (creatorId) => {
  const { data } = await axiosPublic.get(`/contests/creator/${creatorId}`);
  return data;
};

// Get contest for admin
export const getContestForAdmin = async () => {
  const { data } = await axiosSecure.get("/contests/admin");
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

// Add a submission to a contest
export const addParticipant = async (contestId, userId) => {
  const { data } = await axiosSecure.patch(
    `/contests/${contestId}/participant/${userId}`,
    {}
  );
  return data;
};

// Delete a contest in DB
export const deleteContest = async (id) => {
  const { data } = await axiosSecure.delete(`/contests/${id}`);
  return data;
};
