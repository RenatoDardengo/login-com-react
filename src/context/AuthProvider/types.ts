//ira armazenar os tipos que vamos usar na aplicação- isso ocorre
//porque estamos usando TS
export interface IUser{
    email?:string;
    token?:string;

}

export interface IContext extends IUser{
    authenticate:(email:string, password:string)=> Promise<void>;
    logout:()=>void;
}

export interface IAuthProvider{
    children:JSX.Element;
}