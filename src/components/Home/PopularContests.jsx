import useContests from "../../hooks/useContests";
import Loader from "../Shared/Loader";
import SectionHeading from "../Shared/SectionHeading";
import ContestCard from "./ContestCard";

const PopularContests = () => {
  const { contests, isLoading } = useContests();

  if (isLoading) return <Loader />;

  return (
    <div className="mt-20">
      <SectionHeading title="" />
      <div>
        {contests.map((contest) => (
          <ContestCard key={contest.id} contest={contest} />
        ))}
      </div>
    </div>
  );
};

export default PopularContests;
