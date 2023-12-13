import { BiUser } from "react-icons/bi";
import {
  HiOutlineBriefcase,
  HiOutlineBanknotes,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";

const StatsContainer = ({ stats }) => {
  console.log(stats);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      <Stat
        icon={<BiUser className="text-3xl" />}
        title="Total Users"
        value={10}
        color="blue"
      />
      <Stat
        icon={<HiOutlineBriefcase className="text-3xl" />}
        title="Total Contests"
        value={20}
        color="red"
      />
      <Stat
        icon={<HiOutlineCalendarDays className="text-3xl" />}
        title="Total Creators"
        value={90}
        color="yellow"
      />
      <Stat
        icon={<HiOutlineBanknotes className="text-3xl" />}
        title="Sales"
        value={40}
        color="green"
      />
    </div>
  );
};

export default StatsContainer;
