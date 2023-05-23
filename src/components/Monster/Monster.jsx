import "./Monster.css";

export const Monster = ({ hp, isTransformed }) => {
  return (
    <div className="container">
      {isTransformed ? (
        <span role="img" aria-label="👹" className="hero">
          👹
          <span>!?</span>
        </span>
      ) : (
        <span role="img" aria-label="👹" className="monster">
          👹
        </span>
      )}
      <div className="info">
        <div className="name">モンスター</div>
        <div className="hp">
          <span>HP{hp}/100</span>
        </div>
      </div>
    </div>
  );
};
