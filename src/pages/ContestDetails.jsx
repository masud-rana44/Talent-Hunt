import Countdown from "react-countdown";
import { Link, useParams } from "react-router-dom";

import Container from "../components/Shared/Container";
import useContestById from "../hooks/useContestById";
import Loader from "../components/Shared/Loader";
import useRole from "../hooks/useRole";

const ContestDetails = () => {
  const { id } = useParams();
  const { contest, isLoading } = useContestById(id);
  const { role, isLoading: isRoleLoading } = useRole();

  if (isLoading || isRoleLoading) return <Loader />;

  const {
    _id,
    title,
    type,
    description,
    instruction,
    image,
    prizeMoney,
    creator,
    winner,
    deadline,
    participationCount,
  } = contest;

  return (
    <div>
      <Container>
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src={image} alt="" className="w-full" />
            </div>
            <div className="p-2">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p>{description}</p>
              <p>{instruction}</p>
              <div className="flex flex-col font-medium">
                <span className="mb-2">
                  Total participants: {participationCount}
                </span>
                <span className="mb-2">Type: {type}</span>
                <span className="mb-2">Prize: {prizeMoney}</span>
              </div>
              <div>
                <span className="mb-2">Deadline: {deadline}</span>
              </div>
              {creator && (
                <div className="flex flex-col italic">
                  <span>Creator: {creator?.name}</span>
                  <span>Role: {creator?.email}</span>
                </div>
              )}
              {winner && (
                <div>
                  <span>Winner: {winner?.name}</span>
                  <span>Prize: {winner?.image}</span>
                </div>
              )}

              <Countdown date={new Date(deadline)}></Countdown>

              <Link
                to={`/contests/${_id}/register`}
                className="mt-6 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Registration
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContestDetails;
