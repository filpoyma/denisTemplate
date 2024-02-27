import React, { ChangeEvent, FormEvent, useState } from "react";
import "./FileUploadStyles.css";
import readXlsxFile from "read-excel-file";
import { template } from "../template/template";

const downloadTxtFile = (text: string) => {
  const element = document.createElement("a");
  const file = new Blob([text], { type: "text/plain;charset=utf-8" });
  element.href = URL.createObjectURL(file);
  element.download = "template.html";
  document.body.appendChild(element);
  element.click();
};

const FileUploadComponent: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedFile) {
      readXlsxFile(selectedFile)
        .then((rows: any) => {
          const html = template(rows);
          downloadTxtFile(html);
        })
        .catch((error) => {
          console.error("file-FileUpload.tsx error:", error);
          alert("Wrong file format. File must be .xlsx");
        });
    } else {
      alert("No file selected");
    }
  };

  return (
    <div className="file-upload-component">
      <h2>HTML from XLSX</h2>
      <p>fast and easy way</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="custom-file-upload">
          Click to upload
        </label>
        <input id="file-upload" type="file" onChange={handleFileChange} />
        <br />
        {!!selectedFile && <p>{selectedFile.name}</p>}
        <button type="submit" className="submit-button">
          Convert
        </button>
      </form>
    </div>
  );
};

export default FileUploadComponent;
