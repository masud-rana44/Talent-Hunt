import useContests from "../../hooks/useContests";
import Container from "../Shared/Container";
import Loader from "../Shared/Loader";
import SectionHeading from "../Shared/SectionHeading";
import ContestCard from "./ContestCard";

const PopularContests = () => {
  const { contests, isLoading } = useContests();

  if (isLoading) return <Loader />;

  return (
    <div className="mt-20">
      <Container>
        <SectionHeading
          title="Popular Contests"
          subtitle="See Our Popular contests"
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {contests.map((contest) => (
            <ContestCard key={contest._id} contest={contest} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularContests;
