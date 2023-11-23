import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      {/* <img
                className="hidden md:block"
                src={logoImg}
                alt="logo"
                width="100"
                height="100"
              /> */}
      <h1 className="text-xl font-bold">LOGO</h1>
    </Link>
  );
};

export default Logo;
