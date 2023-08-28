import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF"];
const Thumbnail = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <FileUploader
      maxSize="2"
      handleChange={handleChange}
      name="file"
      types={fileTypes}
    />
  );
};

export default Thumbnail;
