
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import Blogpage from './pages/blog-page/Blogpage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Navbar/>} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/blog' element={<Blogpage />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
