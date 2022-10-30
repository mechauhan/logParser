import express, { Application } from "express";
import { logParser } from "./routes/logParser";

const app: Application = express();
const PORT = process.env.PORT || 4000;
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/publics", express.static("publics"));
app.use(logParser);

app.listen(PORT, (): void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`);
});
