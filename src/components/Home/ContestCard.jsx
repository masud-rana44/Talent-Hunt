import { Link } from "react-router-dom";

const ContestCard = ({ contest }) => {
  const { _id, title, image, participantsCount, type, description } = contest;

  return (
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
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg w-full">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
