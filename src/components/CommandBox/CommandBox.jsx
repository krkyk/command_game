import "./CommandBox.css";

export const CommandBox = ({ handleAttack, handleEscape, handleTransform }) => {
  return (
    <div className="box">
      <button onClick={handleAttack}>攻撃</button>
      <button onClick={handleEscape}>逃げる</button>
      <button onClick={handleTransform}>変身</button>
    </div>
  );
};
