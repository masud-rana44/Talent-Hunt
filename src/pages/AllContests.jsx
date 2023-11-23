import Loader from "../components/Shared/Loader";
import useContests from "../hooks/useContests";
import ContestCard from "../components/Home/ContestCard";
import Container from "../components/Shared/Container";

const AllContests = () => {
  const { contests, isLoading } = useContests();

  if (isLoading) return <Loader />;

  return (
    <div className="mt-20">
      <Container>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {contests.map((contest) => (
            <ContestCard key={contest._id} contest={contest} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllContests;
