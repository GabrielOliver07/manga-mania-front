import "./NewManga.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mangaServices from "../../services/manga.services"

// import FormCadastroManga from "../../componentes/FormCadastroManga";
import UserNavBar from "../../componentes/UserNavBar";

function NewManga() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [publicationYear, setPublicationYear] = useState("");
    const [status, setStatus] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [numberOfChapters, setNumberOfChapters] = useState("");
    const [coverImageUrl, setCoverImageUrl] = useState("");

    const navigate = useNavigate();

    const handleName = (e) => setName(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handlePublicationYear = (e) => setPublicationYear(e.target.value);
    const handleStatus = (e) => setStatus(e.target.value);
    const handleCategory = (e) => setCategory(e.target.value);
    const handleAuthor = (e) => setAuthor(e.target.value);
    const handleNumberOfChapters = (e) => setNumberOfChapters(e.target.value);
    const handleCoverImageUrl = (e) => setCoverImageUrl(e.target.value);

    const handleSignupSubmit = (e) => {
        e.preventDefault();

        const requestBody = { name, description, publicationYear, status, category, author, numberOfChapters, coverImageUrl };

        mangaServices
            .createOne(requestBody)
            .then((response) => {
                navigate("/manga");
            })
            .catch((error) => {
                console.error(error)
                // const errorDescription = error.response.data.message;
                // setErrorMessage(errorDescription);
            });
    };

    return (
        <div>
            <UserNavBar/>
            <div className="SignupPage">
                <h1>New Mangá</h1>

                <form className="Form" onSubmit={handleSignupSubmit}>

                    <label>Name:</label>
                    <input type="text" name="name" value={name} onChange={handleName} />

                    <label>Description:</label>
                    <input type="text" name="description" value={description} onChange={handleDescription} />

                    <label>Publication Year:</label>
                    <input type="text" name="publicationYear" value={publicationYear} onChange={handlePublicationYear} />

                    <label>Status:</label>
                    <input type="text" name="status" value={status} onChange={handleStatus} />

                    <label>Category:</label>
                    <input type="text" name="category" value={category} onChange={handleCategory} />

                    <label>Author:</label>
                    <input type="text" name="author" value={author} onChange={handleAuthor} />

                    <label>Number Of Chapters: </label>
                    <input type="text" name="numberOfChapters" value={numberOfChapters} onChange={handleNumberOfChapters} />

                    <label>Cover Image Url:</label>
                    <input type="text" name="coverImageUrl" value={coverImageUrl} onChange={handleCoverImageUrl} />



                    <button type="submit">New Mangá</button>
                </form>

                {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}

            </div>

        </div>
    );
}

export default NewManga;