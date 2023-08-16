import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import SignUp from './pages/signup/SignUp';
import Home from "./pages/Home";
import Blogpage from './pages/blog-page/Blogpage';
import ProfilePage from './pages/profile-page/ProfilePage';

import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="bg-black font-custom  text-xl overflow-hidden ">
      <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/blog' element={<Blogpage />} />
      <Route path='/profile' element={<ProfilePage/>} />
     </Routes>
     </BrowserRouter>
    </div>
    // <div className="App">
    //  <BrowserRouter>
    //  <Routes>
    //   <Route path='/' element={<Navbar/>} />
    //   <Route path='/signup' element={<SignUp />} />
    //   <Route path='/login' element={<Login />} />
    //   <Route path='/blog' element={<Blogpage />} />
    //   <Route path='/profile' element={<ProfilePage/>} />
    //  </Routes>
    //  </BrowserRouter>
    // </div>
  );
}

export default App;
