import Loader from "../components/Shared/Loader";
import useContests from "../hooks/useContests";
import ContestCard from "../components/Home/ContestCard";
import Container from "../components/Shared/Container";
import Categories from "../components/Contest/Categories";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const AllContests = () => {
  const { contests, isLoading } = useContests();
  const [filteredContests, setFilteredContests] = useState([]);
  const [searchParas] = useSearchParams();

  const category = searchParas.get("category");

  console.log(contests);

  useEffect(() => {
    // Filter the contests based on the category
    if (category) {
      const filtered = contests?.filter(
        (contest) => contest?.type?.toLowerCase() === category
      );
      setFilteredContests(filtered);
    } else {
      setFilteredContests(contests);
    }
  }, [category, contests]);

  if (isLoading) return <Loader />;

  return (
    <div className="mt-10">
      <Categories />
      <Container>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredContests?.map((contest) => (
            <ContestCard key={contest._id} contest={contest} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllContests;
