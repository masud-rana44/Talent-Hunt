import { useState } from "react";
import { useParams } from "react-router-dom";
import useContestByIdForCreator from "../../hooks/useContestByIdForCreator";
import Loader from "../../components/Shared/Loader";
import { declareWinner } from "../../api/apiContests";
import toast from "react-hot-toast";

const ContestSubmission = () => {
  const { id } = useParams();
  const { contest, isLoading } = useContestByIdForCreator(id);
  const [winner, setWinner] = useState("");

  const handleDeclareWinner = async (participantId) => {
    try {
      await declareWinner(id, { winner: participantId });
      toast.success("Winner declared");
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    }
  };

  if (isLoading || !contest) return <Loader />;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">{contest?.name}</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">
              Participant Name
            </th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Submitted Task</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contest?.participants?.map((participant) => (
            <tr key={participant._id}>
              <td className="border border-gray-300 px-4 py-2">
                {participant.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {participant.email}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {participant.task}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {contest.winner ? (
                  <div>{contest.winner.name}</div>
                ) : (
                  contest.deadline < new Date() && (
                    <button
                      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                        winner === participant.id
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      onClick={() => handleDeclareWinner(participant._id)}
                      disabled={winner === participant.id}
                    >
                      Declare Winner
                    </button>
                  )
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContestSubmission;
