// @ts-ignore
import {reject} from 'lodash';
import Api from "../instance";
import {Authlogin} from "../models/authlogin";

const nameSpace = '/';

const signin = (query:string, Authlogin: Authlogin) => {
    return Api.post(`${nameSpace}${query}`,Authlogin)
        .then((res)=>{
            console.log(res);
        })
        .catch(e => reject(e))
}

export const NotesService = {
    signin
}