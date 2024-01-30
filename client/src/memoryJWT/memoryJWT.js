const memoryJWT = () => {
    let inMemoryJWT = null;

    const getToken = () => inMemoryJWT;

    const setToken =(token,tokenExpiration)=>{
        inMemoryJWT = token;
    };
    return {getToken,setToken};
}

export default memoryJWT();