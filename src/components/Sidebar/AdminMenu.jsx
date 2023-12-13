import MenuItem from "./MenuItem";
import { FaTrophy, FaUser, FaUsers } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        label="Dashboard"
        icon={FaUsers}
        address="/dashboard/admin-stats"
      />
      <MenuItem label="Users" icon={FaUsers} address="/dashboard/users" />
      <MenuItem
        label="Contests"
        icon={FaTrophy}
        address="/dashboard/contests"
      />
      <MenuItem label="My Profile" icon={FaUser} address="/dashboard/profile" />
    </>
  );
};

export default AdminMenu;
