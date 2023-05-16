import "./Monster.css";

export const Monster = ({ hp }) => {
  return (
    <div className="container">
      <span role="img" aria-label="👹" className="monster">
        👹
      </span>
      <div className="info">
        <div className="name">モンスター</div>
        <div className="hp">
          <span>HP{hp}/100</span>
        </div>
      </div>
    </div>
  );
};
