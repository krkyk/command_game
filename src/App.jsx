import { useState } from "react";
import { CommandBox } from "./components/CommandBox/CommandBox";
import { Hero } from "./components/Hero/Hero";
import { Message } from "./components/Message/Message";
import { Monster } from "./components/Monster/Monster";
import "./styles.css";

export default function App() {
  const [hp, setHp] = useState(100);
  const [monsterHp, setMonsterHp] = useState(100);
  const [message, setMessage] = useState(null);
  const [isEscaped, setIsEscaped] = useState(false);
  const [isTransformed, setIsTransformed] = useState(false);
  const [transformMessage, setTransformMessage] = useState(null);

  const handleAttack = () => {
    setMonsterHp(monsterHp - 10);
  };

  const handleEscape = () => {
    setMessage("忍者は逃げ出した！");
    setIsEscaped(true);
  };

  const handleTransform = () => {
    setTransformMessage("忍者は変身した！\nモンスターは混乱している！");
    setIsTransformed(true);
  };

  return (
    <div className="App">
      {isEscaped || <Monster hp={monsterHp} isTransformed={isTransformed} />}
      <Hero hp={hp} isTransformed={isTransformed} />
      {message === null || <Message message={message} />}
      {transformMessage === null || <Message message={transformMessage} />}
      <CommandBox
        handleAttack={handleAttack}
        handleEscape={handleEscape}
        handleTransform={handleTransform}
      />
      <button className="reset-btn">全てリセット</button>
    </div>
  );
}
