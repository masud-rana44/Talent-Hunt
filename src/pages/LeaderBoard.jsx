import Container from "../components/Shared/Container";
import Loader from "../components/Shared/Loader";
import useLeaderBoard from "../hooks/useLeaderBoard";

const LeaderBoard = () => {
  const { data, isLoading } = useLeaderBoard();

  if (isLoading) return <Loader />;

  return (
    <div>
      <Container>
        <h1 className="text-3xl font-medium text-center mb-10">Leader Board</h1>
        <div className=" divide-y max-w-xl mx-auto">
          <div className="mb-2 font-semibold">
            <span>Participants</span>
            <span className="float-right">Winning Money ($)</span>
          </div>
          {data.map((user) => (
            <div
              key={user.email}
              className="flex items-center justify-between py-2"
            >
              <div className="flex items-center gap-x-4">
                <img
                  src={user.image}
                  alt=""
                  className="h-11 w-11 object-cover"
                />
                <div>
                  <h1 className="font-medium">{user.winner}</h1>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>
              <div>
                <h1 className="font-medium">{user.totalPrizeMoney}</h1>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LeaderBoard;
