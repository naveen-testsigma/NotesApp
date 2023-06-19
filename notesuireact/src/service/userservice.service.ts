/* eslint-disable react-hooks/rules-of-hooks */
// @ts-ignore
import { reject } from "lodash";
import Api from "../instance";
import {Authlogin} from "../models/authlogin";
import {Authsignup} from "../models/authsignup";

const nameSpace = '/';

const getid = (query:any)=>{
    return Api.get(`${nameSpace}user/${query}`)
        .catch(e => reject(e));

}
const signin = (query:string, Authlogin: Authlogin) => {
    return Api.post(`${nameSpace}${query}`,Authlogin)
        .then((res)=>{
            alert("sigin successfull");
        })
        .catch(e => {reject(e)
        alert("password or email must be wrong")})
}
const signup = (query:string, Authsignup: Authsignup) => {
    return Api.post(`${nameSpace}${query}`,Authsignup)
        .then((res)=>{
            alert("signup successfull");
        })
        .catch(e => {reject(e)
            alert("signup failed try again")})
}
const UserService = {
    signin,
    getid,
    signup
}

export default UserService;
