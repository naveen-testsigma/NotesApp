// @ts-ignore
import {reject} from 'lodash';
import Api from "../instance";
import Notes from "../models/notes";

const nameSpace = '/notes';

const getAllNotes = (query:any,id:any) => {
    return Api.get(`${nameSpace}/search?query=id:${id}${query ? ",title:"+encodeURIComponent(query):''}`)
        .catch(e => reject(e));
}
const addNote = (note:Notes) => {
    return Api.post(`${nameSpace}/${note.userId}`,note)
        .then((res)=>{
            console.log(res);
        })
        .catch(e => reject(e));
}
const removeNote = (id:any) => {
    return Api.remove(`${nameSpace}/${id}`)
        .then(()=>alert("removed successfully"))
        .catch(e => reject(e));
}
export const NoteService = {
    getAllNotes,
    addNote,
    removeNote
}