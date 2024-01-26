import {memo} from "react";
import style from "./Field.module.scss";
import cn from "classnames";

export default memo(
({register,name,error = false, helperText = "", ...rest})=>{
    return(
        <div className={cn(style.inputField,error && style.inputField__error)}>
           <input {...register(name)} {...rest}/>
           {error && <p className={style.error}>{helperText}</p>}
        </div>
    )
  }
);