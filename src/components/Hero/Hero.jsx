import "./Hero.css";

export const Hero = ({ hero, isTransformed }) => {
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
        <div className="name">{hero.name}</div>
        <div className="hp">
          <span>HP{hero.hp}/100</span>
        </div>
      </div>
    </div>
  );
};
