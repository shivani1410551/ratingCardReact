import cardIcon from "/public/assets/images/icon-star.svg";
import Star from "./Star";
import Data from "./StarData";
const RatingState = ({ onSubmit, setRate }) => {
  const Stars = Data.map((star, id) => {
    return <Star key={id} item={star} />;
  });
  function handleInput(e) {
    setRate(e.target.innerText);
  }
  return (
    <div className="rating-state">
      <div className="card-icon">
        <img src={cardIcon} alt="star svg" />
      </div>
      <div className="card-title">
        <h1> How did we do?</h1>
      </div>
      <p className="card-text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="stars-wrapper" onClick={handleInput}>
        {Stars}
      </div>
      <button className="submitBtn" onClick={() => onSubmit(true)}>
        Submit
      </button>
    </div>
  );
};

export default RatingState;
