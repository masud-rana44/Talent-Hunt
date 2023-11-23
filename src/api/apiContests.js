import axios from "axios";

// Get all contests
export const getAllContests = async () => {
  const { data } = await axios("/contests.json");
  return data;
};
