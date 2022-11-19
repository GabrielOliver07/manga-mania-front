import NavBar from './componentes/NavBar';
import FormCadastro from './componentes/FormCadastro';
import Login from './componentes/Login';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home/>}/>

      </Routes> */}
      <NavBar />
      <FormCadastro />
      <Login />

    </div>
  );
}

export default App;
