import "./CommandBox.css";

export const CommandBox = ({ handleAttack, handleEscape }) => {
  return (
    <div className="box">
      <button onClick={handleAttack}>攻撃</button>
      <button onClick={handleEscape}>逃げる</button>{" "}
    </div>
  );
};
