import Loader from "../../components/Shared/Loader";
import useWinningContest from "../../hooks/useWinningContest";

const MyWinningContest = () => {
  const { contest, isLoading } = useWinningContest();

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">My Winning Contest</h1>
      <div className="bg-white p-8 rounded shadow">
        {/* Your creativity goes here */}
        
        <p className="text-lg text-gray-800">Show your success here!</p>
      </div>
    </div>
  );
};

export default MyWinningContest;
