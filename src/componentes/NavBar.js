// import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div className="main">

            <div className="center">
                <div className="menu">
                    <Link to="/">
                        <button className="login">Home</button>
                    </Link>

                    <div className="item-menu">
                        {/* <FaUserPlus /> */}
                        <Link to="/cadastro">
                            <button className="cadastro">Cadastro</button>
                        </Link>

                        <Link to="/login">
                            <button className="login">Login</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )

};

export default NavBar;