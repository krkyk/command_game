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

  const handleAttack = () => {
    setMonsterHp(monsterHp - 10);
  };

  const handleEscape = () => {
    setMessage("忍者は逃げ出した！");
    setIsEscaped(true);
  };

  return (
    <div className="App">
      {isEscaped || <Monster hp={monsterHp} />}
      <Hero hp={hp} />
      {message === null || <Message message={message} />}
      {message === null && (
        <CommandBox handleAttack={handleAttack} handleEscape={handleEscape} />
      )}
    </div>
  );
}
