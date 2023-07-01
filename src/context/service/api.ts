import axios from "axios";
import { getUserLocalStorage } from "../AuthProvider/util";

//crio uma instancia do axios e passo o caminho do servidor
export const  Api = axios.create ({
    baseURL:"https://reqres.in/api/",
});

//essa função configura para que o axios antes de executar requisições passe por ela e obtenha informações
// como por exemplo, pegar o token do usuário logado.

Api.interceptors.request.use(
    (config)=>{
        const user = getUserLocalStorage();
        config.headers.Authorization = user?.token;
        return config;

    },
    (error)=>{
        return Promise.reject(error)

    }
)
