import { Link } from "react-router-dom";

const Logo = ({ size }) => {
  return (
    <Link
      to="/"
      className={`flex items-center ${
        size === "sm" ? "flex-row gap-2" : " flex-col"
      }`}
    >
      <svg
        id="logo-38"
        width="56"
        height="23"
        viewBox="0 0 78 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z"
          className="ccustom"
          fill="#FF7A00"
        ></path>{" "}
        <path
          d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z"
          className="ccompli1"
          fill="#FF9736"
        ></path>{" "}
        <path
          d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z"
          className="ccompli2"
          fill="#FFBC7D"
        ></path>{" "}
      </svg>

      <h1 className="text-gray-600 font-medium leading-10 tracking-widest">
        Talent Hunt
      </h1>
    </Link>
  );
};

export default Logo;
