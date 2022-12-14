import axios from "axios";

class AuthService {
    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5000/auth"
        })

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken");
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }
            return config;
        });
    }

    //add usuario
    createUser = async (requestBody) => {
        return this.api.post('/auth/cadastro', requestBody);
    }

    //login do usuario
    login = async (requestBody) => {
        return this.api.post('/auth/login', requestBody);
    }

    //verificar
    verify = async () => {
        return this.api.get('/auth/verify');
    }
}


const authService = new AuthService();
export default authService;