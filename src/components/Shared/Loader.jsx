import { PulseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <PulseLoader color="#9e2323" size={15} />
    </div>
  );
};

export default Loader;
