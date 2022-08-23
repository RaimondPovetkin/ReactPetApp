import './App.css';
import { useState } from 'react';

import Comp from './components/Comp';

function App() {
    const[num, setNum] = useState(2)
    const[text, setText] = useState('text')
    function incNum(){
        setNum( num + 1)
    }
    function changeText(t){
        setText(t)
    }
  return (
    <div>

      <Comp>

      </Comp>
    <div className="App">
        {num}
    </div>
    <h1>{text}</h1>
    <button onClick={incNum}>+</button>
    <input value={text} onChange={event => changeText(event.target.value)}/>
    </div>
  );
}

export default App;
