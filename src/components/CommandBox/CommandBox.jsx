import "./CommandBox.css";

export const CommandBox = ({ handleAttack, handleEscape, handleTransform }) => {
  return (
    <div className="box">
      <button onClick={handleAttack}>たたかう</button>
      <button onClick={handleEscape}>にげる</button>
      <button onClick={handleTransform}>へんしん</button>
    </div>
  );
};
