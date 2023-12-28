import {GET,POST,PUT,DELETE} from './http_request';
import { serverDetails } from '../../config';


// ===================== Authentiocation =====================

export const registerUser = (data) =>{
    const url = `${serverDetails.serverProxyURL}/api/v1/user/register`;
    return POST(url,{},data);
}

export const loginUser = (data) =>{
    const url = `${serverDetails.serverProxyURL}/api/v1/user/login`;
    return POST(url,{},data,true);
}