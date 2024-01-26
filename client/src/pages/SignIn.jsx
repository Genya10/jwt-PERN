import {useForm} from "react-hook-form";
import style from "./pages.module.scss";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import {signInSchema} from "./validationSchemas";
import Field from "../components/Field";
import Button  from "../components/Button";

const defaultValues = {
    userName:"",
    password:"",
};

export function SignIn(){

    const {handleSignIn}= useContext(AuthContext);

    const {register,handleSubmit,
        formState:{errors,isSubmitting}
    } = useForm({
       defaultValues,
       resolver:yupResolver(signInSchema),
       });
    
    return(
        <form onSubmit={handleSubmit(handleSignIn)} className={style.wrapper}>
            <h2>Login to account</h2>
            <Field 
            name="userName"
            register={register}
            autoComplete="off"
            placeholder ="Name user"
            error={Boolean(errors.userName)}
            helperText={errors.userName?.message}
            />
            <Field 
            name="userName"
            register={register}
            autoComplete="off"
            placeholder ="Password"
            error={Boolean(errors.userName)}
            helperText={errors.userName?.message}
            />        
            <Button disabled ={isSubmitting} type="submit">
                Login
            </Button>
        </form>
    );
}