import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import Loader from "../../components/Shared/Loader";
import useUserStats from "../../hooks/useUserStats";

const UserStats = () => {
  const { stats, isLoading } = useUserStats();
  const COLORS = ["#0088FE", "#FF8042"];

  if (isLoading) return <Loader />;

  const data = [
    { name: "Registered Contest", value: stats?.totalContests },
    { name: "Wining Contest", value: stats?.totalWinningContests },
  ];

  return (
    // <ResponsiveContainer width="100%" height="100%">
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        // label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
    // </ResponsiveContainer>
  );
};

export default UserStats;
