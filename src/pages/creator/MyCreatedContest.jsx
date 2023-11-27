import { Link, useLocation } from "react-router-dom";
import { deleteContest } from "../../api/apiContests";
import Loader from "../../components/Shared/Loader";
import useContestByCreator from "../../hooks/useContestByCreator";
import toast from "react-hot-toast";
import CreatedContestTable from "../../components/Table/CreatedContests/CreatedContestTable";

const MyCreatedContest = () => {
  const { contests, isLoading, refetch } = useContestByCreator();
  const location = useLocation();

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
    // <div className="container mx-auto">
    //   <table className="table-auto w-full">
    //     <thead>
    //       <tr>
    //         <th className="px-4 py-2">Contest Name</th>
    //         <th className="px-4 py-2">Status</th>
    //         <th className="px-4 py-2">Edit</th>
    //         <th className="px-4 py-2">Delete</th>
    //         <th className="px-4 py-2">See Submissions</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {contests.map((contest) => (
    //         <tr key={contest._id}>
    //           <td className="border px-4 py-2 font-medium">
    //             <Link
    //               to={`/contests/${contest._id}`}
    //               className="text-sm text-gray-900 font-medium hover:underline hover:text-blue-700"
    //             >
    //               {contest?.title}
    //             </Link>
    //           </td>
    //           <td className="border h-full px-4 py-2 ">
    //             <span
    //               className={`px-2 py-[2px] ${
    //                 contest?.status === "accepted"
    //                   ? "bg-green-400"
    //                   : "bg-red-400"
    //               } rounded-xl text-white font-medium text-sm`}
    //             >
    //               {contest?.status}
    //             </span>
    //           </td>
    //           <td className="border px-4 py-2">
    // {contest?.status === "pending" ? (
    //   <Link
    //     to={`/dashboard/contests/${contest._id}/update`}
    //     state={{ from: location }}
    //   >
    //     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //       Edit
    //     </button>
    //   </Link>
    // ) : null}
    //           </td>
    //           <td className="border px-4 py-2">
    //             {contest?.status === "pending" ? (
    //               <button
    //                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    //                 onClick={() => handleDelete(contest._id)}
    //               >
    //                 Delete
    //               </button>
    //             ) : null}
    //           </td>
    //           <td className="border px-4 py-2">
    //             {contest.status === "accepted" && (
    // <Link to={`/dashboard/contests/${contest._id}/submissions`}>
    //   <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
    //     See Submissions
    //   </button>
    // </Link>
    //             )}
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div>
      <h1 className="text-3xl text-gray-700 font-bold mb-4">
        My Created Contests
      </h1>
      <CreatedContestTable />
    </div>
  );
};

export default MyCreatedContest;
