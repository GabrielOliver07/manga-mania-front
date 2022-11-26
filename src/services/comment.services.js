import axios from "axios";
class Comment {
    constructor(){
        this.api=axios.create({
            baseURL: `${process.env.REACT_APP_SERVER_URL}/comment` || "http://localhost:5000/comment"
        })

        this.api.interceptors.request.use((config) =>{
            const storedToken = localStorage.getItem("authToken");
            if(storedToken) {
                config.headers={ Authorization: `Bearer ${storedToken}`};
            }
            return config;
        });
    }
}

//add comentario
createOne = async (requestBody) =>{
    return this.api.post('/',requestBody);
}

//todos os comentarios de um manga especifico
getAll = async (requestBody) =>{
    return this.api.get('/',requestBody);
}

//editar comentario
edit = async (id,requestBody) =>{
    return this.api.put(`/${id}`, requestBody);
}

//excluir um comentario
deleteComment = async (id) =>{
    return this.api.delete(`/${id}`);
}

const comment = new Comment();
export default comment;