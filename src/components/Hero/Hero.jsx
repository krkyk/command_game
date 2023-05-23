import "./Hero.css";

export const Hero = ({ hp, isTransformed }) => {
  return (
    <div className="container">
      {isTransformed ? (
        <span role="img" aria-label="🐸" className="hero">
          🐸
        </span>
      ) : (
        <span role="img" aria-label="🥷" className="hero">
          🥷
        </span>
      )}
      <div className="info">
        <div className="name">忍者</div>
        <div className="hp">
          <span>HP{hp}/100</span>
        </div>
      </div>
    </div>
  );
};
