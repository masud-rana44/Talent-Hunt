import MenuItem from "./MenuItem";
import { FaCashRegister, FaGrinWink } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const UsersMenu = () => {
  return (
    <>
      <MenuItem
        label="My Registered Contests"
        icon={FaCashRegister}
        address="/dashboard/registered-contests"
      />
      <MenuItem
        label="My Winning Contests"
        icon={FaGrinWink}
        address="/dashboard/winning-contests"
      />
      <MenuItem
        label="My Profile"
        icon={CgProfile}
        address="/dashboard/profile"
      />
    </>
  );
};

export default UsersMenu;
