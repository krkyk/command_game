import "./Monster.css";

export const Monster = ({ monster, isTransformed }) => {
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
        <div className="name">{monster.name}</div>
        <div className="hp">
          <span>HP{monster.hp}/100</span>
        </div>
      </div>
    </div>
  );
};
