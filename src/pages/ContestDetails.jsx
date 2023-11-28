import { useParams } from "react-router-dom";
import useContestById from "../hooks/useContestById";
import Loader from "../components/Shared/Loader";
import DetailsHeader from "../components/ContestDetails/DetailsHeader";
import DetailsBody from "../components/ContestDetails/DetailsBody";

const ContestDetails = () => {
  const { id } = useParams();
  const { contest, isLoading } = useContestById(id);

  if (isLoading) return <Loader />;

  return (
    <div>
      <DetailsHeader contest={contest} />
      <DetailsBody contest={contest} />
    </div>
  );
};

export default ContestDetails;
