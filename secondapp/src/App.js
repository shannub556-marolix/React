import './App.css';
import First from './comp/fist';
import Fourth from './comp/fourth';
import Second from './comp/second';
import Third from './comp/third';
let  a='dynamic content '
let b = 'Javascript xml'
const user={
  name : 'shannu'
}

const car ={
  name : 'Alto',
  colour : 'red',
  price : '$1200',
  fuel : 'petrol'
}

function App() {
  return (
    <div className="App">
      <h1>Hello this Clear boiler plater with second react app in same folder ...</h1>
      <h2>This is {a} in {b}</h2>
      <img className='image' src='pictures/shannu (2).jpeg'></img>
      <First name={a}/>
      <Second name={b}/>
      <Third name ={user.name}/>
    <Fourth name={car}/>
    </div>
  );
}

export default App;
