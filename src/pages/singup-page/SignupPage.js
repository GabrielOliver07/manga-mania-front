import "./SignupPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../services/auth.services";
import NavBar from "../../componentes/NavBar";

function SignupPage() {
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //   const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleName = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);


    const handleSignupSubmit = (e) => {
        e.preventDefault();
        // Create an object representing the request body
        const requestBody = { email, password, username };
        console.log(requestBody)
        // Send a request to the server using axios
        /* 
        const authToken = localStorage.getItem("authToken");
        axios.post(
          `${process.env.REACT_APP_SERVER_URL}/auth/signup`, 
          requestBody, 
          { headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((response) => {})
        */

        // Or using a service
        auth
            .createUser(requestBody)
            .then((response) => {
                // If the POST request is successful redirect to the login page
                navigate("/login");
            })
            .catch((error) => {
                console.error(error)
                // If the request resolves with an error, set the error message in the state
                // const errorDescription = error.response.data.message;
                // setErrorMessage(errorDescription);
            });
    };

    return (
        <div>
            <NavBar />
            <div className="SignupPage">

                <h1>Sign Up</h1>

                <form className="Form" onSubmit={handleSignupSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={username} onChange={handleName} />

                    <label>Email:</label>
                    <input type="email" name="email" value={email} onChange={handleEmail} />

                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePassword}
                    />



                    <button type="submit">Sign Up</button>
                </form>

                {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}

                <p>Already have account?</p>
                <Link to={"/login"}> Login</Link>
            </div>

        </div>
    );
}

export default SignupPage;