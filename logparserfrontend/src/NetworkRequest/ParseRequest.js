import AxiosBase from "./AxiosBase";

export const fileParseRequest = (inputfile) =>
  new Promise((resolve, reject) => {
    const data = new FormData();
    data.append("inputfile", inputfile);
    console.log("iam at 7");
    AxiosBase.post(`/parser`, data)
      .then((res) => {
        console.log("iam at 9");
        resolve(res);
      })
      .catch((err) => {
        console.log("iam at 14");

        console.log("error", err);
        reject(err);
      });
  });
