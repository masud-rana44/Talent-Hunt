import { Link } from "react-router-dom";

const ContestCard = ({ contest }) => {
  const { _id, name, image, attemptedCount, type, description } = contest;

  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div className="p-2">
        <h2>{name}</h2>
        <p>{description}</p>
        <div>
          <span>{attemptedCount}</span>
          <span>{type}</span>
        </div>
        <Link to={`/contests/${_id}`}>
          <button className="py-2 px-4 bg-slate-200">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ContestCard;
