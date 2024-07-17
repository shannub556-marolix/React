import React from 'react';
import './App.css';
import Eventform from './components/Events_forms';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Eventform/>
      <ToastContainer />
    </div>
  );
}

export default App;
