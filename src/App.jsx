import { useState } from "react";
import { Hero } from "./components/Hero/Hero";
import { Monster } from "./components/Monster/Monster";
import "./styles.css";

export default function App() {
  const [hp, setHp] = useState(100);

  return (
    <div className="App">
      <Monster hp={hp} />
      <Hero hp={hp} />
    </div>
  );
}
