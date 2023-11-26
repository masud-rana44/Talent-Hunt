import { axiosPublic, axiosSecure } from ".";

// Get all contests
export const getAllContests = async () => {
  const { data } = await axiosPublic.get("/contests");
  return data;
};

// Get popular contests
export const getPopularContests = async () => {
  const { data } = await axiosPublic.get("/contests/popular");
  return data;
};

// Get contest by id
export const getContestById = async (id) => {
  const { data } = await axiosSecure.get(`/contests/${id}`);
  return data;
};

// Get contest by creator
export const getContestByCreator = async (creatorId) => {
  const { data } = await axiosSecure.get(`/contests/creator/${creatorId}`);
  return data;
};

// Get contest for admin
export const getContestForAdmin = async () => {
  const { data } = await axiosSecure.get("/contests/admin");
  return data;
};

// Get contest by id for creator
export const getContestByIdForCreator = async (contestId, creatorId) => {
  const { data } = await axiosSecure.get(
    `/contests/${contestId}/creator/${creatorId}`
  );
  return data;
};

// Get registered contests for user
export const getRegisteredContests = async (userId) => {
  const { data } = await axiosSecure.get(`/contests/registered/${userId}`);
  return data;
};

// Get winning contests for user
export const getWinningContests = async (userId) => {
  const { data } = await axiosSecure.get(`/contests/winning/${userId}`);
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

// Declare a winner for a contest
export const declareWinner = async (contestId, winner) => {
  const { data } = await axiosSecure.patch(
    `/contests/${contestId}/winner`,
    winner
  );
  return data;
};

// Delete a contest in DB
export const deleteContest = async (id) => {
  const { data } = await axiosSecure.delete(`/contests/${id}`);
  return data;
};
