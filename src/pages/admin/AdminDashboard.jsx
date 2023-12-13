import Loader from "../../components/Shared/Loader";
import useAdminStats from "../../hooks/useAdminStats";
import StatsContainer from "./components/StatsContainer";

const AdminDashboard = () => {
  const { stats, isLoading } = useAdminStats();

  if (isLoading) return <Loader />;

  console.log(stats);

  return (
    <div>
      <StatsContainer
        stats={{
          users: stats.users,
          contests: stats.totalContests,
          acceptedContests: stats.contests.length,
        }}
      />
    </div>
  );
};

export default AdminDashboard;
