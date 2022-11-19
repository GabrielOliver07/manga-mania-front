import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div className="main">

            <div className="center">
                <div className="menu">
                    <div className="logo">
                        <h3>Manga mania</h3>
                    </div>

                    <div className="item-menu">
                        {/* <FaUserPlus /> */}
                        <h1 href="#">Cadastro</h1>
                        <h2 href="#">Login</h2>
                    </div>
                </div>
                <div className="pesquisa">
                    <h1 href="#">Mangás</h1>
                    <h2 href="#">Categorias</h2>
                </div>
            </div>
        </div>
    )

};

export default NavBar;