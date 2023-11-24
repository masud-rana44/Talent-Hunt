import MenuItem from "./MenuItem";
import { FaUserShield } from "react-icons/fa";
import { SiNginxproxymanager } from "react-icons/si";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        label="Manage Users"
        icon={FaUserShield}
        address="/dashboard/users"
      />
      <MenuItem
        label="Manage Contests"
        icon={SiNginxproxymanager}
        address="/dashboard/contests"
      />
    </>
  );
};

export default AdminMenu;
