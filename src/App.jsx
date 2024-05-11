import { useState } from "react";
import RatingState from "./components/RatingState";
import ThankYouState from "./components/ThankYouState";
function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rate, setRate] = useState("");
  return (
    <div className="card">
      {!isSubmitted && (
        <RatingState
          submit={isSubmitted}
          onSubmit={setIsSubmitted}
          setRate={setRate}
        />
      )}
      {isSubmitted && <ThankYouState onSubmit={setIsSubmitted} rate={rate} />}
    </div>
  );
}

export default App;
