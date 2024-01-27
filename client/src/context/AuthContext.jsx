import { createContext,useState } from "react";
import style from "../app.module.scss";
import axios from "axios";
import config from "../config";

export const AuthClient = axios.create({
    baseURL:'http://localhost:5000/auth',
    withCredentials:true,
})

export const AuthContext = createContext({});

export const AuthProvider =({children})=>{
    const [data,setData] = useState();

    const handleFetch = ()=>{};    
    const handleSignIn =(data)=>{};
    /*const handleSignUp =(data)=>{
        AuthClient.post("/sign-up", data);
        console.log(data)
    };*/
    const handleSignUp = async (data) => {
        try {
          const response = await AuthClient.post("/sign-up", data);
          console.log("handleUp sent", response.data);
          // Продолжайте с обработкой успешного ответа, если нужно
        } catch (error) {
          console.error("Error during sign-up:", error.response.data.error);
          console.error("Error response data:", error.response?.data);
          console.error("Error status:", error.response?.status);
        }
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