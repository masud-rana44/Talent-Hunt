import Loader from "../../components/Shared/Loader";
import { deleteContest, updateContest } from "../../api/apiContests";
import toast from "react-hot-toast";
import useContestForAdmin from "../../hooks/useContestsForAdmin";
import { Link, useLocation } from "react-router-dom";

const ManageContest = () => {
  const { contests, isLoading, refetch } = useContestForAdmin();
  const location = useLocation();

  const handleDelete = async (contestId) => {
    try {
      await deleteContest(contestId);
      refetch();
      toast.success("Contest deleted");
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    }
  };

  const handleToggle = async (contestId, status) => {
    try {
      await updateContest(contestId, { status });
      refetch();
      toast.success("Status updated");
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="container mx-auto">
      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contest Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Deadline
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Creator Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {contests.map((contest) => (
            <tr key={contest._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link
                  to={`/contests/${contest._id}`}
                  className="text-sm text-gray-900 font-medium hover:underline hover:text-blue-700"
                >
                  {contest?.title}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {new Date(contest?.deadline).toLocaleDateString()}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {contest?.creator?.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 py-[2px] ${
                    contest?.status === "accepted"
                      ? "bg-green-400"
                      : "bg-red-400"
                  } rounded-xl text-white font-medium text-sm flex items-center justify-center`}
                >
                  {contest?.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link
                  to={`/dashboard/contests/${contest._id}/update`}
                  state={{ from: location }}
                >
                  <button className="px-4 py-2 mr-2 text-sm font-medium text-blue-500 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white">
                    Edit
                  </button>
                </Link>
                <button
                  className="px-4 py-2 mr-2 text-sm font-medium text-red-500 bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white"
                  onClick={() => handleDelete(contest._id)}
                >
                  Delete
                </button>
                <button
                  className="px-4 py-2 text-sm font-medium text-green-500 bg-transparent border border-green-500 rounded hover:bg-green-500 hover:text-white"
                  onClick={() =>
                    handleToggle(
                      contest._id,
                      contest.status === "pending" ? "accepted" : "pending"
                    )
                  }
                >
                  {contest.status === "pending" ? "Accept" : "Pending"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageContest;
