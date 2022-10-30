import axios from "axios";

const AxiosBase = axios.create({
  baseURL: "http://localhost:4000/",
});

AxiosBase.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default AxiosBase;
export const handleError = (error) => {
  alert("handle Error");
  console.log("HandleError : ", JSON.stringify(error));
  if (error.response.status === 404) {
    // showMessage(error.response.data.Message)
  }
};
