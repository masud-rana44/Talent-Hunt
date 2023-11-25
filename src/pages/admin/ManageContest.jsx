import Loader from "../../components/Shared/Loader";
import { deleteContest, updateContest } from "../../api/apiContests";
import toast from "react-hot-toast";
import useContestForAdmin from "../../hooks/useContestsForAdmin";

const ManageContest = () => {
  const { contests, isLoading, refetch } = useContestForAdmin();

  const handleDelete = async (contestId) => {
    try {
      await deleteContest(contestId);
      refetch();
      toast.success("Contest deleted");
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    }
  };

  const handleConfirm = async (contestId) => {
    try {
      await updateContest(contestId, { status: "accepted" });
      refetch();
      toast.success("Contest accepted");
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="container mx-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contest Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Start Date
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
                <div className="text-sm text-gray-900 font-medium">
                  {contest?.title}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{contest?.deadline}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {contest?.creator?.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{contest?.status}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="px-4 py-2 mr-2 text-sm font-medium text-red-500 bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white"
                  onClick={() => handleDelete(contest._id)}
                >
                  Delete
                </button>
                <button
                  className="px-4 py-2 text-sm font-medium text-green-500 bg-transparent border border-green-500 rounded hover:bg-green-500 hover:text-white"
                  onClick={() => handleConfirm(contest._id)}
                >
                  Confirm
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
