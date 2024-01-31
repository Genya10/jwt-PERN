import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import style from "./pages.module.scss";
import Button from "../components/Button"

export function Demo(){
    const {data, handleFetch, handleLogOut}= useContext(AuthContext);

    return (
        <div className={style.wrapper}>
            <p>{JSON.stringify(data)}</p>
            <Button> Request for a protected route</Button>
            <Button>Go out</Button>
        </div> 
    )
}