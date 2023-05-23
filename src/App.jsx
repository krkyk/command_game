import { useState } from "react";
import { CommandBox } from "./components/CommandBox/CommandBox";
import { Hero } from "./components/Hero/Hero";
import { Message } from "./components/Message/Message";
import { Monster } from "./components/Monster/Monster";
import "./styles.css";
import { wait } from "./utils/wait";

export default function App() {
  const [hp, setHp] = useState(100);
  const [monsterHp, setMonsterHp] = useState(100);
  const [message, setMessage] = useState(null);
  const [BattleStatus, setBattleStatus] = useState();
  const [isEscaped, setIsEscaped] = useState(false);
  const [isTransformed, setIsTransformed] = useState(false);
  const [transformMessage, setTransformMessage] = useState(null);
  const ATTACK_POINT = {
    MAX: 31,
    MIN: 10
  };
  const BATTLE_STATUS = {
    DOING: 0,
    END: 1
  };

  const handleAttack = () => {
    Promise.resolve()
      .then(() => handleHeroAttack())
      .then(() => wait(2000))
      .then(() => handleMonsterAttack())
      .then(() => wait(2000))
      .then(() => handleHeroAttack())
      .then(() => wait(2000))
      .then(() => handleMonsterAttack())
      .then(() => wait(2000))
      .then(() => handleHeroAttack())
      .then(() => wait(2000))
      .then(() => handleMonsterAttack())
      .then(() => wait(2000))
      .catch((err) => handleError(err));

    const getAttackPoint = () => {
      const min = Math.ceil(ATTACK_POINT.MIN);
      const max = Math.floor(ATTACK_POINT.MAX);
      return Math.floor(Math.random() * (max - min) + min);
    };

    const handleHeroAttack = () => {
      setMessage("忍者の攻撃！");
      const attackPoint = getAttackPoint();
      setMonsterHp(monsterHp - attackPoint);
      if (monsterHp < 0) {
        throw new Error("MONSTER_DEAD");
      }
    };

    const handleMonsterAttack = () => {
      setMessage("モンスターの攻撃！");
      const attackPoint = getAttackPoint();
      setHp(hp - attackPoint);
      if (hp < 0) {
        throw new Error("HERO_DEAD");
      }
    };

    const handleError = (err) => {
      switch (err.message) {
        case "MONSTER_DEAD":
          setMessage("モンスターをたおした！");
          setBattleStatus(BATTLE_STATUS.END);
          break;
        case "HERO_DEAD":
          setMessage("忍者はたおれてしまった！");
          setBattleStatus(BATTLE_STATUS.END);
          break;
        default:
          alert(err);
          break;
      }
    };
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
      <button className="reset-btn" onClick={() => window.location.reload()}>
        全てリセット
      </button>
    </div>
  );
}
