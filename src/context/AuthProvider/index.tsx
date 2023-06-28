//é o arquivo onde o contexto será criado
import React,{Children, Context, createContext, useState} from "react";
import { IAuthProvider, IContext, IUser } from "./types";

export const AuthContext = createContext<IContext>({} as IContext);

//o AuthProvider é quem ficará por fora da aplicação verificando quem fez login ou logout
export const AuthProvider=({children}:IAuthProvider)=>{
    //ela precisa ter um estado interno, pois é ele quem vai disponibilizar informações para a aplicação
    const [user, setUser]= useState<IUser | null>();

    async function authenticate(email:string, password:string) {
        
    }

    function logout(){

    }
    return(
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}