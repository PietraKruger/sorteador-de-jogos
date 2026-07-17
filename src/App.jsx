import { useState } from "react";
import "./App.css";
import Jogo from "./components/Jogo";

function App() {
  const [times, setTimes] = useState([
    "Al Moçar",
    "Apend City",
    "Ah Tá Anta",
    "Atlético Maneiro",
    "Baile de Munique",
    "Barcelusa",
    "Bar Sem Lona",
    "Chelsicha",
    "CR Flamingo",
    "Cuiabayern",
    "Falso Madrid",
    "Horriver Plate",
    "Inter de Limão",
    "Jumentus",
    "Lazionados",
    "Malfica",
    "Meia Boca Junior",
    "Paysanduba",
    "Real Madruga",
    "Real Matismo",
  ]);

  const [jogos, setJogos] = useState([
    // {
    //   id: 0,
    //   time1: "Loka Juniors",
    //   time2: "Vaso da Grama",
    // },
    // {
    //   id: 1,
    //   time1: "GPT FC",
    //   time2: "EC Gemini",
    // },
  ]);

  function sortearJogo() {
    let copiaTimes = [...times];
    let n1 = Math.floor(Math.random() * copiaTimes.length);
    let t1 = copiaTimes[n1];
    copiaTimes.splice(n1, 1);

    let n2 = Math.floor(Math.random() * copiaTimes.length);
    let t2 = copiaTimes[n2];
    copiaTimes.splice(n2, 1);

    let novoJogo = {
      id: Date.now(),
      time1: t1,
      time2: t2,
    };

    setJogos([...jogos, novoJogo]);
    setTimes([...copiaTimes]);

    // console.log(copiaTimes);
  }

  return (
    <div className="cont-app">
      <h1>Copa do mundo cringe</h1>

      {times.length > 0 && <button className="btn-sortear" onClick={sortearJogo}>Sortear Jogos</button>}

      <h2>Jogos da primeira rodada</h2>
      <div className="primeira-rodada">
        {jogos.map((jogo) => (
          <Jogo key={jogo.id} j={jogo} />
        ))}
      </div>

      <ul className="lista-times">
        {times.map((time) => (
          <li key={time}>{time}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
