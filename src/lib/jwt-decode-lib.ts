import jwtDecode from "jwt-decode";

export const  decodeJwtToken = (token:any) => {
    return jwtDecode(token);
}

export const setExpirationTime = (expireTimeMilliseconds:any , startTimeMilliseconds:any) => {
    return  expireTimeMilliseconds - startTimeMilliseconds;
}


