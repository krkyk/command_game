import "./CommandBox.css";

export const CommandBox = ({
  handleAttack,
  handleEscape,
  handleTransform,
  handleDance
}) => {
  return (
    <div className="box">
      <button onClick={handleAttack}>たたかう</button>
      <button onClick={handleEscape}>にげる</button>
      <button onClick={handleTransform}>へんしん</button>
      <button onClick={handleDance}>おどる</button>
    </div>
  );
};
