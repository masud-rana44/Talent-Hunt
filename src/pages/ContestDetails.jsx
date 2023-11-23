import Countdown from "react-countdown";
import Container from "../components/Shared/Container";

const ContestDetails = () => {
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
              <div>
                <span>Winner: {contest.winner.name}</span>
                <span>Prize: {contest.winner.prize}</span>
              </div>
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

const contest = {
  _id: 3,
  name: "Writing Contest",
  image:
    "https://hrcdn.net/s3_pub/istreet-assets/engage-assets/events/258/microsite/Frame%203%20(1).jpg",
  attemptedCount: 123,
  description: "Compose a compelling short story",
  type: "Writing",
  tags: ["Creative Writing", "Literature", "Storytelling"],
  deadline: "2023-12-20",
  creator: {
    _id: 103,
    name: "StoryWeaver",
    image: "https://via.placeholder.com/150",
    description: "Passionate about storytelling",
    role: "Contest Creator",
  },
  winner: {
    _id: 202,
    name: "WordSmith",
    image: "https://via.placeholder.com/150",
    prize: "$300",
  },
};
