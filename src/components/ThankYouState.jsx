import React from "react";
import ThankuSvg from "/public/assets/images/illustration-thank-you.svg";
const ThankYouState = ({ rate, onSubmit }) => {
  return (
    <div className="thankuState">
      <img src={ThankuSvg} alt="card-img" />
      <p className="card-subtitle">
        You selected
        <span data-rated-value> {rate} </span>
        out of 5
      </p>
      <h2 className="card-title">Thank You!</h2>
      <p className="card-text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
      <button className="submitBtn" onClick={() => onSubmit(false)}>
        Go Back!
      </button>
    </div>
  );
};

export default ThankYouState;
