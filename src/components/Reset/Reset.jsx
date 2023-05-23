import "./Reset.css";

export const Reset = ({ handleReset }) => {
  return (
    <div className="reset-box">
      <button className="reset-btn" onClick={handleReset}>
        全てリセット
      </button>
    </div>
  );
};
