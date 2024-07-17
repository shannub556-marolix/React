import './App.css';
import Hello from './components/short';
import Reducer from './components/reducer';



function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Welcome to React</h1>
      <Hello/>
      <Reducer/>
    </div>
  );
}

export default App;
