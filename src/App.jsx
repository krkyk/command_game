import { useState } from "react";
import { CommandBox } from "./components/CommandBox/CommandBox";
import { Dance } from "./components/Dance/Dance";
import { Hero } from "./components/Hero/Hero";
import { Message } from "./components/Message/Message";
import { Monster } from "./components/Monster/Monster";
import { Reset } from "./components/Reset/Reset";
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
  const [isDance, setIsDance] = useState(false);
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

  const handleDance = () => {
    setMessage(`${HERO.name}と${MONSTER.name}はダンス友達になった！`);
    setIsDance(true);
  };

  const handleReset = () => {
    setMessage(null);
    setBattleStatus(0);
    setIsEscaped(false);
    setIsTransformed(false);
    setTransformMessage(null);
    setIsDance(false);
  };

  return (
    <>
      {isDance ? (
        <div className="App">
          <Dance />
          <Message message={message} />
          <Reset handleReset={handleReset} />
        </div>
      ) : (
        <div className="App">
          {isEscaped ? (
            <>
              <Hero hero={HERO} isTransformed={isTransformed} />
              {message === null || <Message message={message} />}
              <Reset handleReset={handleReset} />
            </>
          ) : (
            <>
              <Monster monster={MONSTER} isTransformed={isTransformed} />
              <Hero
                hero={HERO}
                isTransformed={isTransformed}
                isEscaped={isEscaped}
              />
              {message === null || <Message message={message} />}
              {transformMessage === null || (
                <Message message={transformMessage} />
              )}
              <CommandBox
                handleAttack={handleAttack}
                handleEscape={handleEscape}
                handleTransform={handleTransform}
                handleDance={handleDance}
              />
              <Reset handleReset={handleReset} />
            </>
          )}
        </div>
      )}
    </>
  );
}
