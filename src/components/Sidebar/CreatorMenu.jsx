import { IoMdAddCircle } from "react-icons/io";
import { BiSolidBookAdd } from "react-icons/bi";
// import { BsDatabaseFillAdd } from "react-icons/bs";

import MenuItem from "./MenuItem";

const CreatorMenu = () => {
  return (
    <>
      <MenuItem
        label="Add Contest"
        icon={IoMdAddCircle}
        address="/dashboard/contests/new"
      />
      <MenuItem
        label="My Created Contests"
        icon={BiSolidBookAdd}
        address="/dashboard/creator/contests"
      />
      {/* <MenuItem
        label="Contest Submitted"
        icon={BsDatabaseFillAdd}
        address="/dashboard/contests/submitted"
      /> */}
    </>
  );
};

export default CreatorMenu;
