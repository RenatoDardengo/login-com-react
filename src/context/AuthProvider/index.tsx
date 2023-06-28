//é o arquivo onde o contexto será criado
import React,{Context, createContext} from "react";
import { IContext } from "./types";

export const AuthContext = createContext<IContext>({} as IContext);

