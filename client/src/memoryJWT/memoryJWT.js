const memoryJWT = () => {
    let inMemoryJWT = null;

    const getToken = () => inMemoryJWT;

    const setToken =(token,tokenExpiration)=>{
        inMemoryJWT = token;
    };
    const deleteToken = ()=>{
        inMemoryJWT = null;
    }

    return {getToken,setToken,deleteToken};
}

export default memoryJWT();