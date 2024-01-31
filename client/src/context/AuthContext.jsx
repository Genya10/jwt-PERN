import { createContext,useState } from "react";
import style from "../app.module.scss";
import axios from "axios";
import config from "../config";
import memoryJWT from "../memoryJWT/memoryJWT";
import ShowError from "../utils/ShowError";

export const AuthClient = axios.create({
    baseURL:`${config.API_URL}/auth`,
    withCredentials:true,
})

const resourseClient = axios.create({
  baseURL:`${config.API_URL}/resourse`,
})

resourseClient.interceptors.request.use((config)=>{
  const accessToken = memoryJWT.getToken();
  if(accessToken){
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
  },
  (error)=>{
    Promise.reject(error);
  }
);

export const AuthContext = createContext({});

export const AuthProvider =({children})=>{
    const [data,setData] = useState();

    const handleFetch = ()=>{
      resourseClient.get("/protected").then((res)=>{
        setData(res.data);
      })
      .catch(ShowError);
    };        
    const handleSignUp = (data)=>{
          AuthClient.post("/sign-up", data).then((res)=>{
            const {accessToken, accessTokenExpiration}=res.data;
            memoryJWT.setToken(accessToken,accessTokenExpiration)
          })
           .catch(ShowError);
    };
    const handleSignIn =(data)=>{
          AuthClient.post("/sign-in", data).then((res)=>{
            const {accessToken, accessTokenExpiration}=res.data;
            memoryJWT.setToken(accessToken,accessTokenExpiration)
          })
          .catch(ShowError);

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