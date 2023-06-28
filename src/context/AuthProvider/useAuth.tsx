import {useContext} from "react";
import { AuthContext } from ".";

export const useAuth=()=>{
    const context = useContext(AuthContext);
    return context;
}

//qualquer parte da aplicação que quiser usar o contexto é so chamar o 
//useAuth que tudo estará lá disponível