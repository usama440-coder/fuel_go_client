import "./StatsBox.css";

const StatsBox = ({ heading, value }) => {
  return (
    <div className="statsBox">
      <p>{heading}</p>
      <h2>{value}</h2>
    </div>
  );
};

export default StatsBox;
