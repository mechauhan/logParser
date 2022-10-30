import multer, { FileFilterCallback } from "multer";

const storage = multer.diskStorage({
  destination: "./publics/uploader",
  filename(req, file, cb) {
    let num = Math.round(
      Math.pow(36, 10 + 1) - Math.random() * Math.pow(36, 10)
    )
      .toString(36)
      .slice(1);
    var fileName = num + file.originalname;
    console.log(fileName, "88888888888888888");

    cb(null, fileName);
  },
});

// const fileFilter = function (req, file, callback) {
//   var ext = path.extname(file.originalname);
//   if (ext !== ".pdf") {
//     return callback(new Error("Only PDF is allowed"));
//   }
//   callback(null, true);
// };

export const upload = multer({
  storage: storage,
  limits: { fileSize: 100000000 },
});
