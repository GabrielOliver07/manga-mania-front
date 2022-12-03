// import "./FormOneManga.css";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import mangaServices from "./../services/manga.services";



// function OneManga() {
//     const [one, setOne] = useState([]);
//     const { mangaId } = useParams()
//     function getOne() {
//         mangaServices.getOne(mangaId)
//             .then(response => {
//                 setOne(response.data)
//                 console.log("response", response.data)
//                 console.log("aqui", one)
//                 console.log("manga id", mangaId)
//             })

//             .catch(error => {
//                 console.log(error)
//             })
//     };
    
//     useEffect(() => {
//         getOne()
//     }, [])

//     return (
//         <div>
//             {one.length > 0 && one.map((manga) => {
//                 return (

//                     <div className="manga-one" key={manga._id}>
//                         <div className="imagem">
//                             <img src={manga.coverImageUrl} alt='mangaImg' style={{ width: '13rem' }} />
//                         </div>
//                         <p>Name: {manga.name}</p>
//                         <p>Descriptions: {manga.description}</p>
//                         <p>Publication Year: {manga.publicationYear}</p>
//                         <p>Status: {manga.status}</p>
//                         <p>Category: {manga.category}</p>
//                         <p>Author: {manga.author}</p>
//                         <p>Number Of Chapters: {manga.numberOfChapters}</p>

//                     </div>
//                 );
//             })}
//         </div>
//     );

// }

// export default OneManga;

