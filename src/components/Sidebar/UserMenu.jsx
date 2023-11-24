import MenuItem from "./MenuItem";
import { BsFingerprint } from "react-icons/bs";

const UsersMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label="My Bookings"
        address="my-bookings"
      />
    </>
  );
};

export default UsersMenu;
