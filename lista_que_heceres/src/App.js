import './App.css';
import { useState } from 'react';
import Lista from './componentes/Lista';
import Form from './componentes/Form'

function App() {
  const[lista, setLista] = useState([
    
  ])
  return (
    <div className="App">
      <Form lista={lista} setLista={setLista}/>      
      <Lista lista={lista}/>      
    </div>
  );
}

export default App;
