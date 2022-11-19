import FormCadastro from "../componentes/FormCadastro";
import Login from "../componentes/Login";
import NavBar from "../componentes/NavBar";

function Home() {
    return (
        <div>
            <NavBar />
            <FormCadastro />
            <Login />
        </div>
    )

}


export default Home;