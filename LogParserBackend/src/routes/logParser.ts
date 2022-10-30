import express, { Request, Response } from "express";
import { getData } from "../controller/logParser";
import { upload } from "../util/multer";

const router = express.Router();

router.post("/parser", upload.single("inputfile"), getData);

export { router as logParser };
