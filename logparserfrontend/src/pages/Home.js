import React from "react";
import { useEffect, useState } from "react";
import { fileParseRequest } from "../NetworkRequest/ParseRequest";
import axios from "axios";
import fileDownload from "js-file-download";

const Home = () => {
  const [file, setFile] = useState(null);
  const [url, seturl] = useState(null);
  useEffect(() => {}, []);

  const handleChange = (e) => {
    let image = e.target.files[0];
    setFile(image);
    console.log(e.target.files[0]);
  };
  const submit = () => {
    if (file) {
      fileParseRequest(file).then((res) => {
        console.log(res.data.url, "yaha h url");
        seturl(res.data.url);
        setFile(null);
        fetchFileFromUrl(res.data.url);
      });
    }
  };
  const fetchFileFromUrl = async (url) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, "JsonFile.json");
      });
  };

  return (
    <div>
      <h1>Log parser app</h1>
      <div className="inputDiv">
        {" "}
        <input type="file" onChange={(e) => handleChange(e)} />
      </div>

      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Home;
