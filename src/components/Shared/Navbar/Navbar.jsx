import MenuDropdown from "./MenuDropdown";
import Logo from "../Logo";
import Container from "../Container";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Logo />

            {/* Home */}
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>

            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
