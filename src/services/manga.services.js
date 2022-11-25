import axios from "axios";
class Manga {
    constructor(){
        this.api=axios.create({
            baseURL:  `${process.env.REACT_APP_SERVER_URL}/manga` || "http://localhost:5000/manga"
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

//add manga
createOne = async (requestBody) =>{
    return this.api.post('/',requestBody);
}

//todos os mangas
getAll = async () =>{
    return this.api.get('/');
}

//um manga especifico
getOne = async (id) =>{
    return this.api.get(`/${id}`);
}

const manga = new Manga();
export default manga;