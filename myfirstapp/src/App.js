import logo from './logo.svg';
import './App.css';
import Saturday from './components/sample1';
import FIrst from './components/sample';
import './components/style.css';

function App() {
  return (
    <div className="App">
      <h1>Hello this is first App</h1>
      <FIrst/>
      <p> This is nested component</p>
      < Saturday/>

    </div>
  );
}

export default App;
