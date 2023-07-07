
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SignUp from './pages/signup/SignUp';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Navbar/>} />
      <Route path='/signup' element={<SignUp />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
