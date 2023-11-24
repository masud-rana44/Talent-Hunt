import MenuDropdown from "./MenuDropdown";
import Logo from "../Shared/Logo";
import Container from "../Shared/Container";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import toast from "react-hot-toast";

const Navbar = () => {
  const { logOut } = useAuth();
  const { role } = useRole();

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logout successfully");
    } catch (error) {
      toast.error(error?.message || "Failed to logout");
    }
  };

  return (
    <header className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Logo />

            {/* Home */}
            <ul className="flex items-center gap-x-6">
              <li>
                <Link
                  to="/"
                  className="block  px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/contests"
                  className="block  px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Contests
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="block  px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <button className="block  px-4 py-3 hover:bg-neutral-100 transition font-semibold capitalize">
                  {role}
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block  px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Logout
                </button>
              </li>
            </ul>

            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
