import img from "./images/dance.gif";
import "./Dance.css";

export const Dance = () => {
  return (
    <div className="container">
      <img src={img} alt="" className="dance-img" />
    </div>
  );
};
