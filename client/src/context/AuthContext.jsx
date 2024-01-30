import { createContext,useState } from "react";
import style from "../app.module.scss";
import axios from "axios";
import config from "../config";

export const AuthClient = axios.create({
    baseURL:`${config.API_URL}/auth`,
    withCredentials:true,
})

export const AuthContext = createContext({});

export const AuthProvider =({children})=>{
    const [data,setData] = useState();

    const handleFetch = ()=>{};    
    const handleSignIn =(data)=>{};
    const handleSignUp = (data)=>{
          AuthClient.post("/sign-up", data);
          console.log(data)
             
    };

    const handleLogOut =()=>{};

    return(
        <AuthContext.Provider
        value={{
           data,
           handleFetch,
           handleSignIn,
           handleSignUp,
           handleLogOut
        }}
        >
        {children}
        </AuthContext.Provider>
    )
}