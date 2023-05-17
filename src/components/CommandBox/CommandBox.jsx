import "./CommandBox.css";

export const CommandBox = ({ handleAttack, handleEscape, message }) => {
  return (
    <div className="box">
      {message === null ? (
        <div>
          <button onClick={handleAttack}>攻撃</button>
          <button onClick={handleEscape}>逃げる</button>{" "}
        </div>
      ) : (
        <div>{message}</div>
      )}
    </div>
  );
};
