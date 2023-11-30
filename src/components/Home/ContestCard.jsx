import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContestCard = ({ contest }) => {
  const { _id, title, image, participantsCount, type, description } = contest;

  return (
    <motion.div
      className="box"
      whileHover={{ scale: [null, 1.05, 1.03] }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white flex flex-col rounded-lg shadow-md p-4 break-words">
        <div>
          <img
            src={image}
            alt={`Image of ${title}`}
            className="w-full object-cover h-[260px] rounded-t-lg"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description.slice(0, 70)}...</p>
            <div className="flex justify-between items-center mb-4 ">
              <span className="text-gray-500">
                Total participants: {participantsCount}
              </span>
              <span className="text-gray-500 capitalize">{type} Contest</span>
            </div>
          </div>
          <div className="mt-auto">
            <Link to={`/contests/${_id}`} className="mt-auto">
              <button className="py-2 px-4 bg-[#FF9736] text-white rounded-lg w-full">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContestCard;
