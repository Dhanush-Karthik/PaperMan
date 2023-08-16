import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import CodeEditor from "./CodeEditor";
import { useRef } from "react";

const AddCodeEditor = ({
  handleLanguage,
  language,
  handleCode,
  code,
  setCode,
}) => {
  const editorRef = useRef();
  const [copy, setCopy] = useState("copy");

  const handleCopyClick = () => {
    setCopy("copied!");
    navigator.clipboard
      .writeText(code)
      .then(() => {
        console.log("Code copied to clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy code to clipboard:", error);
      });
    setTimeout(() => {
      setCopy("copy");
    }, 3000);
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "black", // Customize the background color
      borderColor: "teal", // Customize the border color
      boxShadow: "0 0 0 1px teal", // Customize the box shadow
      width: "90vw",
      height: "50px",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "white",

      // Add any other styles you want to customize the text color
    }),
    option: (provided, state) => ({
      ...provided,
      background: "black", // Customize the background color of the selected option
      color: "white", // Customize the text color of the selected option
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: "black",
      // Add any other styles you want to customize the option container
    }),
  };

  const options = [
    { value: "javascript", label: "javascript" },
    { value: "java", label: "java" },
    { value: "javascript", label: "react.js" },
    { value: "css", label: "css" },
    { value: "html", label: "html" },
    { value: "json", label: "json" },
    { value: "python", label: "python" },
    { value: "sql", label: "SQL" },
    { value: "xml", label: "XML" },
    { value: "typescript", label: "Typescript" },
    { value: "plaintext", label: "Text" },
  ];
  return (
    <div className="w-[100%] flex gap-6 flex-col justify-center items-center gap-3   ">
      <div className="flex md:flex-col gap-6 w-[90%] items-center justify-evenly ">
        <div className="p-4">Choose the Language</div>
        <div>
          <CreatableSelect
            isClearable
            options={options}
            className=" bg-black"
            classNamePrefix="react-select"
            styles={customStyles}
            onChange={handleLanguage}
          />
        </div>
      </div>
      <div ref={editorRef} className="w-[90%] ">
        <div className="bg-teal-600 w-full flex justify-end p-1">
          <span
            className="p-1 text-sm cursor-pointer"
            onClick={handleCopyClick}
          >
            {copy}
          </span>
        </div>
        <CodeEditor
          handleCode={handleCode}
          code={code}
          setCode={setCode}
          language={language}
        />
      </div>
    </div>
  );
};

export default AddCodeEditor;
