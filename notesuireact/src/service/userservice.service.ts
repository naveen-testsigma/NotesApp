// @ts-ignore
import {reject} from 'lodash';
import Api from "../instance";
import {Authlogin} from "../models/authlogin";

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

const UserService = {
    signin,
    getid
}

export default UserService;