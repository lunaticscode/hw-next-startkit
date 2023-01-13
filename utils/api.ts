import axios from "axios";
export type ApiMethods = "get" | "post" | "put" | "delete";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 3000;

const customAxios = axios.create({});

customAxios.interceptors.request.use((req) => {
  return req;
});

customAxios.interceptors.response.use(
  (res) => {
    const data = res.data;
    return data;
  },
  (err) => {
    console.log({ err });
    return Promise.reject(err);
  }
);

export const getApi = (path: string, params: any) => {
  return customAxios.get(path, { params });
};

export const postApi = (path: string, data: any) => {
  return customAxios.post(path, data);
};

export const putApi = (path: string, data: any) => {
  return customAxios.put(path, data);
};

export const deleteApi = (path: string, params: any) => {
  return customAxios.delete(path, { params });
};
