const ValidateRequest = require("../utils/ValidateRequest"); ;
const yup = require("yup");

 const signInSchema = yup.object({
        userName:yup.string()
        .required("Field is necessarily")
        .max(20,"Max light - 20 symbol"),
        password:yup.string()
        .required("Field is necessarily")
        .min(3, "Password is too short")
        .max(50, "Maximum length - 50 symbol"),
});

 const signUpSchema = yup.object({
        userName:yup.string()
        .required("Field is necessarily")
        .max(25,"Max length - 25 symbol"),
        password:yup.string()
        .required("Field is necessarily")
        .min(3, "Password is too short")
        .max(50, "Maximum length - 50 symbol"),
        role: yup.number()
        .required("Field is necessarily")
        .typeError("Value should be a number!")
        .min(1, "Minimum length - 1")
        .max(3, "Maximum length - 3 symbol"),
});

 const logoutSchema = yup.object({
    cookie:yup.object({
        refreshToken: yup.string().required("Field is necessarily!")
    }),
});

 class AuthValidator {
    static async signIn(req,res,next){
        return ValidateRequest(req,res,next,signInSchema)
    }
    static async signUp(req,res,next){
        return ValidateRequest(req,res,next,signUpSchema)
    }
    static async logOut(req,res,next){
        return ValidateRequest(req,res,next,logoutSchema)
    }
    static async refresh(req,res,next){
        return ValidateRequest(req,res,next)
    }
}

module.exports = AuthValidator;