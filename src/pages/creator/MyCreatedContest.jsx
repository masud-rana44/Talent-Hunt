import { Link } from "react-router-dom";
import { deleteContest } from "../../api/apiContests";
import Loader from "../../components/Shared/Loader";
import useContestByCreator from "../../hooks/useContestByCreator";
import toast from "react-hot-toast";

const MyCreatedContest = () => {
  const { contests, isLoading, refetch } = useContestByCreator();

  if (isLoading) return <Loader />;

  const handleDelete = async (id) => {
    try {
      await deleteContest(id);
      refetch();
      toast.success("Contest deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container mx-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Contest Name</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Edit</th>
            <th className="px-4 py-2">Delete</th>
            <th className="px-4 py-2">See Submissions</th>
          </tr>
        </thead>
        <tbody>
          {contests.map((contest) => (
            <tr key={contest._id}>
              <td className="border px-4 py-2 font-medium">{contest?.title}</td>
              <td className="border h-full px-4 py-2 ">
                <span
                  className={`px-2 py-[2px] ${
                    contest?.status === "accepted"
                      ? "bg-green-400"
                      : "bg-red-400"
                  } rounded-xl text-white font-medium text-sm`}
                >
                  {contest?.status}
                </span>
              </td>
              <td className="border px-4 py-2">
                {contest?.status === "pending" ? (
                  <Link to={`/dashboard/contests/${contest._id}/update`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Edit
                    </button>
                  </Link>
                ) : null}
              </td>
              <td className="border px-4 py-2">
                {contest?.status === "pending" ? (
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(contest._id)}
                  >
                    Delete
                  </button>
                ) : null}
              </td>
              <td className="border px-4 py-2">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  See Submissions
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCreatedContest;
