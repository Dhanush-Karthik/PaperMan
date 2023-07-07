
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Navbar/>} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
