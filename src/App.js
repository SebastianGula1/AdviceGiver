import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { AdviceCard } from "./components/adviceCard";

function App() {
  const [advice, setAdvice] = useState({});

  const getAdvice = async () => {
    const reponse = await axios.get("https://api.adviceslip.com/advice");
    setAdvice(reponse.data.slip);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="App">
      {advice && (
        <AdviceCard
          adviceText={advice.advice}
          adviceId={advice.id}
          getAdviceFunc={getAdvice}
        />
      )}
    </div>
  );
}

export default App;
