//é o arquivo onde o contexto será criado
import React,{Children, Context, createContext, useState, useEffect} from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { LoginRequest, getUserLocalStorage, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

//o AuthProvider é quem ficará por fora da aplicação verificando o estado de quem fez login ou logout
export const AuthProvider=({children}:IAuthProvider)=>{
    //ela precisa ter um estado interno, pois é ele quem vai disponibilizar informações para a aplicação
    const [user, setUser]= useState<IUser | null>();
    useEffect(()=>{
        const user = getUserLocalStorage();
        if (user) {
            setUser(user)
            
        }
    
    },[]);

    async function authenticate(email:string, password:string) {
        const response =await  LoginRequest (email, password);
        const payload  = {token:response.token, email};
        setUser(payload);
        setUserLocalStorage(payload);
        
    }

    function logout(){
        setUser(null);
        setUserLocalStorage(null);

    }

    // criamos useEffect para verificar o estado e obter as informações quando o componente for montado

    return(
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}