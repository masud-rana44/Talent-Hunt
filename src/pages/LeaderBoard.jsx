import Loader from "../components/Shared/Loader";
import useLeaderBoard from "../hooks/useLeaderBoard";

const LeaderBoard = () => {
  const { data, isLoading } = useLeaderBoard();

  if (isLoading) return <Loader />;

  console.log(data);
  return <div>LeaderBoard</div>;
};

export default LeaderBoard;
