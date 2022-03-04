import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card/Card';

function App() {

  const [advice, setAdvice] = useState('');

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const json = await response.json();
    setAdvice(json.slip);
    console.log(json.slip)
  }

  useEffect(() => {
    getAdvice();
  }, [])

  return (
    <div className="App">
      <Card id={advice.id} advice={advice.advice} onClick={getAdvice} />
    </div>
  );
}

export default App;
