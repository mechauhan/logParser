import { Request, Response } from "express";
import { Parser } from "../util/Parser";

export const getData = (req: Request, res: Response) => {
  try {
    if (req.file) {
      let parserObj = new Parser();
      let logdata = parserObj.fetchDataFromLogFile(req);
      if (parserObj.exportToJson(logdata)) {
        res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        return res.send({
          url: "http://localhost:4000/publics/output/output.json",
          statusCode: 200,
        });
      }
      return res.send({
        message: "Something went Wrong",
        statusCode: 400,
      });
    }

    return res.send({
      message: "Not selected any file",
      statusCode: 400,
    });
  } catch (err) {
    console.log(err);
  }
};
