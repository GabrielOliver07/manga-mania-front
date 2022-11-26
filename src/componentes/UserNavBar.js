// import { FaUserPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";


function UserNavBar() {
    return (
        <div className="main">

            <div className="center">
                <div className="menu">
                    <div className="logo">
                        <h3>Manga mania</h3>
                    </div>

                    <div className="item-menu">
                        {/* <FaUserPlus /> */}
                        <h1 href="#">Logado</h1>

                    </div>
                </div>
                <div className="pesquisa">

                    {/* <Link to="/"> */}
                        <button className="pesquisa1">Mangás</button>
                    {/* </Link> */}
                    
                    {/* <Link to="/manga/new"> */}
                        <button className="pesquisa2">Add Mangá</button>
                    {/* </Link> */}
                    
                </div>
            </div>
        </div>
    )

};

export default UserNavBar;