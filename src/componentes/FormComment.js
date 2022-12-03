import "./FormComment.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import commentServices from "./../services/comment.services";


function Comment() {
    const [comment, setComment] = useState("");
    // const [userId, setUserId] = useState("");
    // const [mangaId, setMangaId] = useState("");
    

    const navigate = useNavigate();

    const handleComment = (e) => setComment(e.target.value);
   
    

    const handleSignupSubmit = (e) => {
        e.preventDefault();

        const requestBody = { Comment,  }
        // userId, mangaId

        commentServices
            .createOne(requestBody)
            .then((response) => {
                navigate (`/manga/`);
            })
            .catch((error) => {
                console.error(error)
                // const errorDescription = error.response.data.message;
                // setErrorMessage(errorDescription);
            });
    };

    return (
        <div>
            
            <div className="manga-list">
                

                <form className="Form" onSubmit={handleSignupSubmit}>

                    <label>Comment:</label>
                    <input type="text" Comment="Comment" value={comment} onChange={handleComment} />
                    <button type="submit">Post</button>
                </form>


            </div>

        </div>
    );
}

export default Comment;