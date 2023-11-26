import Loader from "../../components/Shared/Loader";
import useWinningContest from "../../hooks/useWinningContest";

const MyWinningContest = () => {
  const { contests, isLoading } = useWinningContest();

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">My Winning Contest</h1>
      <div className="bg-white p-8 rounded shadow">
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
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
              Participate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWinningContest;
