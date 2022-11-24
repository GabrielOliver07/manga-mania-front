import NavBar from './componentes/NavBar';
import FormCadastro from './componentes/FormCadastro';
import Login from './componentes/Login';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserNavBar from './componentes/UserNavBar';
import FormCadastroManga from './componentes/FormCadastroManga';


function App() {
  return (
    <div className="App">
       <NavBar />
       
      <Routes>
        <Route path="/" element={<Home/>}/>

      </Routes>
     
      <UserNavBar/>
      <FormCadastroManga/>

    </div>
  );
}

export default App;
