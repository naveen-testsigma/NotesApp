/* eslint-disable react-hooks/rules-of-hooks */
// @ts-ignore
import { reject } from "lodash";
import Api from "../instance";
import { Authlogin } from "../models/authlogin";

const nameSpace = "/";

const getid = (query: any) => {
  return Api.get(`${nameSpace}user/${query}`).catch((e) => reject(e));
};
const signin = (query: string, Authlogin: Authlogin) => {
  return Api.post(`${nameSpace}${query}`, Authlogin);
};

const UserService = {
  signin,
  getid,
};

export default UserService;
