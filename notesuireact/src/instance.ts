import axios from "axios";
import { Cookies } from "react-cookie";

const getBaseUrl = async () => {
  return "http://localhost:8080";
};
function getToken() {
  const cookie = new Cookies();
  if (cookie.get("user")) {
    return cookie.get("user");
  }
}
const get = <T>(endpoint: string, params?: Record<string, any>): Promise<T> =>
  new Promise(async (resolve, reject) => {
    const baseURL = await getBaseUrl();
    const headers: any = {
      "Content-Type": "application/json",
    };
    const token = getToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    return axios
      .get(baseURL + endpoint, {
        params,
        data: {},
        headers: headers,
      })
      .then((response) => resolve(response.data))
      .catch((error) => {
        reject(error);
      });
  });

const post = <T>(endpoint: string, data: object): Promise<T> =>
  new Promise(async (resolve, reject) => {
    const baseURL = await getBaseUrl();
    const headers: any = {
      "Content-Type": "application/json",
    };
    const token = getToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    axios(baseURL + endpoint, {
      method: "POST",
      data: JSON.stringify(data),
      headers: headers,
    })
      .then(async (response) => {
        const content = await response.data;
        return typeof content === "string"
          ? JSON.parse(content === "" ? JSON.stringify({}) : content)
          : content;
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });

const put = <T>(endpoint: string, data: object): Promise<T> =>
  new Promise(async (resolve, reject) => {
    const baseURL = await getBaseUrl();
    const headers: any = {
      "Content-Type": "application/json",
    };
    const token = getToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    axios(baseURL + endpoint, {
      method: "PUT",
      data: JSON.stringify(data),
      headers: headers,
    })
      .then(async (response) => {
        const content = await response.data;
        return typeof content === "string"
          ? JSON.parse(content === "" ? JSON.stringify({}) : content)
          : content;
      })
      .then((data: any) => {
        if (data.error) {
          reject(data);
        } else {
          resolve(data);
        }
      });
  });

const remove = (endpoint: string): Promise<void> =>
  new Promise(async (resolve, reject) => {
    const baseURL = await getBaseUrl();
    const headers: any = {};
    const token = getToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    axios(baseURL + endpoint, {
      method: "DELETE",
      headers: headers,
    })
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });

const Api = {
  get,
  post,
  put,
  remove,
};

export default Api;
