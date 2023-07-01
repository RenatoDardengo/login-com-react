//Terá uma compenete que recebe um Filho e verifica se o usuário está logado.
import React from 'react';
import { useAuth } from "../../context/AuthProvider/useAuth";

//Se tiver dá acesso a rota, senão redireciona para o login
export const ProtectedLayout =({children}:{children:JSX.Element})=>{
    const auth = useAuth();

    if(!auth.email){
        return <h2> Você não tem acesso!</h2>

    }

    return children;
}