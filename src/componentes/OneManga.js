import "./OneManga.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mangaServices from "../services/manga.services";
import UserNavBar from "./UserNavBar";
import Comment from "./FormComment";



function OneManga() {
    const [manga, setManga] = useState();
    const { mangaId } = useParams()
    function getOne() {
        mangaServices.getOne(mangaId)
            .then(response => {
                setManga(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    };

    useEffect(() => {
        getOne()
    }, [])

    return (
        <div>
            <UserNavBar/>

            {manga && (

                <div className="manga-one" key={manga._id}>
                    <div className="imagem">
                        <img src={manga.coverImageUrl} alt='mangaImg' style={{ width: '13rem' }} />
                    </div>
                    <p>Name: {manga.name}</p>
                    <p>Descriptions: {manga.description}</p>
                    <p>Publication Year: {manga.publicationYear}</p>
                    <p>Status: {manga.status}</p>
                    <p>Category: {manga.category}</p>
                    <p>Author: {manga.author}</p>
                    <p>Number Of Chapters: {manga.numberOfChapters}</p>
                </div>

            )}
            
            <Comment/>
        </div>
    );

}

export default OneManga;

