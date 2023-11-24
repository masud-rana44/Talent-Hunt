import Countdown from "react-countdown";
import { useParams } from "react-router-dom";

import Container from "../components/Shared/Container";
import useContestById from "../hooks/useContestById";
import Loader from "../components/Shared/Loader";

const ContestDetails = () => {
  const { id } = useParams();
  const { contest, isLoading } = useContestById(id);

  if (isLoading) return <Loader />;

  const {
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
              <img src={image} alt="" />
            </div>
            <div className="p-2">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p>{description}</p>
              <p>{instruction}</p>
              <div className="flex flex-col font-medium">
                <span>Total participants: {participationCount}</span>
                <span>Type: {type}</span>
                <span>Prize: {prizeMoney}</span>
              </div>
              <div>
                <span>Deadline: {deadline}</span>
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
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContestDetails;
