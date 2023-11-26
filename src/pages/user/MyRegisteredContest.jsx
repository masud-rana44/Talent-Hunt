import { useState } from "react";

import Loader from "../../components/Shared/Loader";
import useRegisteredContest from "../../hooks/useRegisteredContest";
import { Link } from "react-router-dom";

const MyRegisteredContest = () => {
  const { contests, isLoading } = useRegisteredContest();
  const [sortBy, setSortBy] = useState("deadline");

  if (isLoading) return <Loader />;

  // const sortedContests = contests.sort((a, b) => {
  //   if (sortBy === "deadline") {
  //     return a.deadline - b.deadline;
  //   } else if (sortBy === "name") {
  //     return a.name.localeCompare(b.name);
  //   }
  //   return 0;
  // });

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Registered Contests</h1>
      <div className="flex justify-end mb-4">
        <label htmlFor="sort" className="mr-2">
          Sort By:
        </label>
        <select
          id="sort"
          className="border border-gray-300 rounded px-2 py-1"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="upcoming">Upcoming</option>
          <option value="name">Name</option>
        </select>
      </div>
      {contests?.map((contest) => (
        <div
          key={contest._id}
          className="border border-gray-300 rounded p-4 mb-4"
        >
          <h2 className="text-lg font-bold mb-2">{contest.title}</h2>
          <p className="text-gray-500 mb-2">
            Deadline: {new Date(contest.deadline).toLocaleString()}
          </p>
          <p>{contest.description}</p>
          <Link to={`/dashboard/task/${contest._id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
              Participate
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MyRegisteredContest;
