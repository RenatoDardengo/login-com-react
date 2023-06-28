import axios from "axios";

//crio uma instancia do axios e passo o caminho do servidor
export const  Api = axios.create ({
    baseURL:"https://reqres.in/api/"
})