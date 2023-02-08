import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { AdviceCard } from './components/adviceCard';

function App() {

  const [advice, setAdvice ] = useState({});

  useEffect(()=>{

    const getAdvice = async () => {
      const reponse = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(reponse.data.slip);
    }
    getAdvice();
  },[])

  return (
    <div className="App">
      {advice && <AdviceCard adviceText={advice.advice} adviceId={advice.id}/>}
    </div>
  );
}

export default App;
