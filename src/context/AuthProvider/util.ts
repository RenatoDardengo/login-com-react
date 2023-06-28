//criar função para authenticar

import { Api } from "../service/api";
import { IUser } from "./types";

//salvar informações do usuário no localStorage
export function setUserLocalStorage(user:IUser | null){
    localStorage.setItem("u", JSON.stringify(user));
}

//pega as informações do usuário no localStorage
export function getUserLocalStorage (){
    const json = localStorage.getItem("u");
    //se não tiver um JSON retorna nulo
    if (!json) {
        return null;
    }
    // se tiver faza conversão
    const user = JSON.parse(json);
    //se a conversão resultar em um arquivo quebardo ou string vazia retorna nulo
    return user ?? null;
}
//faz a validação no Banco
 export async function LoginRequest (email:string, password:string){
    try {
        const request = await Api.post ("login", {email, password});
        return request.data;
    } catch (error) {
        return null;
    }
 }