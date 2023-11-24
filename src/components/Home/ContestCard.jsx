import { Link } from "react-router-dom";

const ContestCard = ({ contest }) => {
  const { _id, title, image, attemptedCount, type, description } = contest;

  return (
    <div className="">
      <div>
        <img
          src={image}
          alt={`Image of ${title}`}
          className="w-full object-cover h-[260px]"
        />
      </div>
      <div className="p-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{description}</p>
        <div>
          <span>{attemptedCount}</span>
          <span>Type: {type}</span>
        </div>
        <Link to={`/contests/${_id}`}>
          <button className="py-2 px-4 bg-slate-200 w-full mt-4">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContestCard;
