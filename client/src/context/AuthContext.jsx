import { createContext,useState } from "react";
import style from "../app.module.scss";

export const AuthContext = createContext({});

export const AuthProvider =({children})=>{
    const [data,setData] = useState();

    const handleFetch = ()=>{};    
    const handleSignIn =(data)=>{};
    const handleSignUp =(data)=>{};
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