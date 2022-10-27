import { useState } from "react";
import logo from './logo.svg';
import './App.css';

const names = ['Gustavo', 'Gerly', 'Cassandra', 'Corwin',
'Jacques', 'Ainis', 'Gianna', 'Emily', 'Fanessa', 'Adi',
'Mido', 'Cari', 'Eddie', 'Captain Ed', 'Todd', 'Nick',
'Tyler', 'Brad'];

function App() {

  const [myName, setMyName] = useState("Eddie");
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {myName} is pretty cool.
        </p>
        {
          names.map(name => (
            <button key={name} onClick={
              ()=>setMyName(name)
            }>{name}</button>
          ))
        }
        <p>You clicked the button {counter} times.</p>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <button onClick={
          () => {
            if (counter !== 0) {
              setCounter(counter - 1)
            }
          }
        }>-1</button>
      </header>
    </div>
  );
}

export default App;
