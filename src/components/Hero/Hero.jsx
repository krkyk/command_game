import "./Hero.css";

export const Hero = ({ hp }) => {
  return (
    <div className="container">
      <span role="img" aria-label="🥷" className="hero">
        🥷
      </span>
      <div className="info">
        <div className="name">忍者</div>
        <div className="hp">
          <span>HP{hp}/100</span>
        </div>
      </div>
    </div>
  );
};
