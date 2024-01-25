import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import style from "./pages.module.scss";

export function Demo(){
    const {data,handleFetch,handleLogOut}= useContext(AuthContext);

    return (
        <div className={style.wrapper}>
            <p>{JSON.stringify(data)}</p>
            <button> Request for a protected route</button>
            <button>Go out</button>
        </div> 
    )
}