import Countdown from "react-countdown";
import { useParams } from "react-router-dom";

import Container from "../components/Shared/Container";
import useContestById from "../hooks/useContestById";
import Loader from "../components/Shared/Loader";

const ContestDetails = () => {
  const { id } = useParams();
  const { contest, isLoading } = useContestById(id);

  if (isLoading) return <Loader />;

  return (
    <div>
      <Container>
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src={contest.image} alt="" />
            </div>
            <div className="p-2">
              <h2 className="text-xl font-semibold">{contest.name}</h2>
              <p>{contest.description}</p>
              <div>
                <span>{contest.attemptedCount}</span>
                <span>{contest.type}</span>
              </div>
              <div>
                <span>Deadline: {contest.deadline}</span>
              </div>
              <div>
                <span>Creator: {contest.creator.name}</span>
                <span>Role: {contest.creator.role}</span>
              </div>
              {contest.winner && (
                <div>
                  <span>Winner: {contest.winner.name}</span>
                  <span>Prize: {contest.winner.prize}</span>
                </div>
              )}
              <div>
                <span>Tags: {contest.tags.join(", ")}</span>
              </div>
              <Countdown date={new Date(contest.deadline)}></Countdown>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContestDetails;
