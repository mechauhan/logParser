import fs from "fs";

export class Parser {
  fetchDataFromLogFile(req: any) {
    let dataReaded = fs.readFileSync(req.file.path);
    let arrOfData: {
      timestamp: string;
      loglevel: string;
      transactionId: string;
      err: string;
    }[] = [];

    dataReaded
      .toString()
      .split(/\r?}\n/)
      .forEach((line, index) => {
        if (line.includes("warn") || line.includes("error")) {
          let spliteddata = line.split(" - ");
          let objectData = spliteddata[2].split("&quot;");
          arrOfData.push({
            timestamp: spliteddata[0],
            loglevel: spliteddata[1],
            transactionId: objectData[3],
            err: objectData[13],
          });
        }
      });

    return arrOfData;
  }
  exportToJson(
    data: {
      timestamp: string;
      loglevel: string;
      transactionId: string;
      err: string;
    }[] = []
  ) {
    fs.writeFile(
      "./publics/output/output.json",
      JSON.stringify(data),
      function (err) {
        if (err) return false;
      }
    );
    return true;
  }
}
