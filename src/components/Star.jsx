const Star = (props) => {
  console.log(props.item);
  return (
    <>
      <button className="iconBtn" data-rating-btn={props.item.dataRating}>
        {props.item.id}
      </button>
    </>
  );
};

export default Star;
