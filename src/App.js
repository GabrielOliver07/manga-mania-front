import Login from './pages/Login';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import UserHome from './pages/UserHome';
import NewManga from './pages/NewManga';


function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/manga/new" element={<NewManga />} />
        <Route path="/user" element={<UserHome />} />

      </Routes>
    </div>
  );
}

export default App;
