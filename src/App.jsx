import { useState } from "react";
import { CommandBox } from "./components/CommandBox/CommandBox";
import { Hero } from "./components/Hero/Hero";
import { Message } from "./components/Message/Message";
import { Monster } from "./components/Monster/Monster";
import "./styles.css";
import { wait } from "./utils/wait";

export default function App() {
  const HERO = {
    name: "ニンジャ",
    hp: 100
  };

  const MONSTER = {
    name: "モンスター",
    hp: 100
  };

  const [heroInfo, setHeroInfo] = useState(HERO);
  const [monsterInfo, setMonsterInfo] = useState(MONSTER);
  const [message, setMessage] = useState(null);
  const [battleStatus, setBattleStatus] = useState(0);
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
    const newHero = { ...heroInfo };
    const newMonster = { ...monsterInfo };

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
      setMessage(`${HERO.name}の攻撃！`);
      const afterHp = MONSTER.hp - getAttackPoint();
      console.log(afterHp);
      if (afterHp <= 0) {
        throw new Error("MONSTER_DEAD");
      }
      newMonster.hp = afterHp;
      setMonsterInfo(newMonster);
    };

    const handleMonsterAttack = () => {
      setMessage(`${MONSTER.name}の攻撃！`);
      const afterHp = HERO.hp - getAttackPoint();
      if (afterHp <= 0) {
        throw new Error("HERO_DEAD");
      }
      newHero.hp = afterHp;
      setHeroInfo(newHero);
    };

    const handleError = (err) => {
      switch (err.message) {
        case "MONSTER_DEAD":
          setMessage(`${MONSTER.name}をたおした！`);
          setBattleStatus(BATTLE_STATUS.END);
          break;
        case "HERO_DEAD":
          setMessage(`${HERO.name}はたおれてしまった！`);
          setBattleStatus(BATTLE_STATUS.END);
          break;
        default:
          alert(err);
          break;
      }
    };
  };

  const handleEscape = () => {
    setMessage(`${HERO.name}は逃げ出した！`);
    setIsEscaped(true);
  };

  const handleTransform = () => {
    setTransformMessage(
      `${HERO.name}は変身した！\n${MONSTER.name}は混乱している！`
    );
    setIsTransformed(true);
  };

  const handleReset = () => {
    setMessage(null);
    setBattleStatus(0);
    setIsEscaped(false);
    setIsTransformed(false);
    setTransformMessage(null);
  };

  return (
    <div className="App">
      {isEscaped || <Monster monster={MONSTER} isTransformed={isTransformed} />}
      <Hero hero={HERO} isTransformed={isTransformed} />
      {message === null || <Message message={message} />}
      {transformMessage === null || <Message message={transformMessage} />}
      <CommandBox
        handleAttack={handleAttack}
        handleEscape={handleEscape}
        handleTransform={handleTransform}
      />
      <button className="reset-btn" onClick={handleReset}>
        全てリセット
      </button>
    </div>
  );
}
