import "./Monster.css";

export default function Monster() {
  return (
    <div className="container">
      <span role="img" aria-label="👹" class="monster">
        👹
      </span>
      <div className="info">
        <div className="name">モンスター</div>
        <div className="hp">
          HP<span>100/100</span>
        </div>
      </div>
    </div>
  );
}
