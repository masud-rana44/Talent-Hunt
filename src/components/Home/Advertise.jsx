import useWinners from "../../hooks/useWinners";
import Container from "../Shared/Container";
import Loader from "../Shared/Loader";
import SectionHeading from "../Shared/SectionHeading";

const Advertise = () => {
  const { contests, isLoading } = useWinners();

  if (isLoading) return <Loader />;

  return (
    <div className="mt-20">
      <Container>
        <SectionHeading
          title="Winners"
          subtitle="See How Much Our Winners Earned"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-8">
          {contests.map((contest, index) => (
            <div key={index} className="bg-white rounded-lg border p-6">
              <div className="flex items-center mb-4">
                <img
                  src={contest.winner.image}
                  alt={contest.winner.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-gray-800 font-bold">
                    {contest.winner.name} win {contest?.prizeMoney}$ Prize Money
                  </p>
                  <p className="text-gray-600">{contest?.title}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Participants {contest.participantCount} people from all over the
                world
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Advertise;
