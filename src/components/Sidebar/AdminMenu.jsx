import MenuItem from "./MenuItem";
import { HiOutlineCalendarDays, HiOutlineUser } from "react-icons/hi2";

const AdminMenu = () => {
  return (
    <>
      <MenuItem label="Users" icon={HiOutlineUser} address="/dashboard/users" />
      <MenuItem
        label="Contests"
        icon={HiOutlineCalendarDays}
        address="/dashboard/contests"
      />
    </>
  );
};

export default AdminMenu;
