// import Login from './pages/Login';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
// import Cadastro from './pages/Cadastro';
// import UserHome from './pages/UserHome';
import NewManga from './pages/new-manga/NewManga';
import SignupPage from './pages/singup-page/SignupPage';
import LoginPage from './pages/login-page/LoginPage';
import ProfilePage from './pages/profile-page/ProfilePage';
import AllManga from './pages/mangas/AllManga';
import OneManga from './componentes/OneManga';



function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/manga/new" element={<NewManga />} />
        <Route path="/user" element={<ProfilePage />} />
        <Route path="/manga" element={<AllManga />} />
        <Route path="/manga/:mangaId" element={<OneManga />} />

       
       
        

      </Routes>
    </div>
  );
}

export default App;
