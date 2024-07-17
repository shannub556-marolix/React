import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Personal from "./components/Personal";
import Course from "./components/Course";
import Payment from "./components/Payment";
import Account from "./components/Account";
import Home from './components/Home';
import Welcome from './components/Welcome';

function App() {
    
    return (
      // <div><Home/></div>
        <Router>
            <Routes>
                <Route path="/course" element={<Course  />} />
                <Route path="/payment" element={<Payment  />} />
                <Route path="/account" element={<Account />} />
                {/* You can handle the default route here */}
                <Route path="/personal" element={<Personal />} />
                <Route path='/home' element={<Home/>}  />
                  <Route path='/' element={<Welcome/>} />

            </Routes>
        </Router>
    );
}

export default App;
