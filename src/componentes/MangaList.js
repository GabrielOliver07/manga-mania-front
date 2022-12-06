import "./MangaList.css";
import { useState, useEffect } from "react";
import mangaServices from "../services/manga.services";
import Comment from "./FormComment";
import { Link } from "react-router-dom";




function MangaList() {
  const [list, setList] = useState([]);
  function getManga() {
    mangaServices.getAll()
      .then(response => {
        setList(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  };
  useEffect(() => {
    getManga()
  }, [])

  return (
    <div>
      {list.map((manga) => {
        return (

          <div className="manga-list" key={manga._id}>
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
            <Link to={`/manga/${manga._id}`}>
              <button>See mangá</button>
            </Link>
            <Comment mangaId={manga._id}/>

          </div>
        );
      })}
    </div>
  );
}

export default MangaList;