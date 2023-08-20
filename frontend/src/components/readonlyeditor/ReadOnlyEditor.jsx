import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import React, { useState } from "react";
import { BsFillClipboardFill } from "react-icons/bs";
import { MdDone } from "react-icons/md";

import "./ReadOnlyEditor.css";

const ReadOnlyEditor = ({ code, language }) => {
  const [copy, setCopy] = useState(false);

  return (
    <>
      <div className="reader-container">
        <div className="code-header">
          <p className="code-topic">Example code: </p>
          {copy ? (
            <button className="clipboard-button">
              <span>
                <MdDone />
              </span>
              Copied!
            </button>
          ) : (
            <button
              className="clipboard-button"
              onClick={() => {
                navigator.clipboard.writeText(code);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 3000);
              }}
            >
              <span>
                <BsFillClipboardFill />
              </span>
              Copy code
            </button>
          )}
        </div>

        <SyntaxHighlighter
          language={language}
          style={atomOneDark}
          customStyle={{
            padding: "15px",
            fontSize: "15px",
          }}
          wrapLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default ReadOnlyEditor;

// import { Editor } from '@monaco-editor/react'

// import "./ReadOnlyEditor.css";

// const ReadOnlyEditor = ({language,code}) => {

//   const editorHeight = (code) =>{
//     const noOfLines = code.split("\n").length;
//     return (noOfLines * (3 * window.innerHeight) / 100)+7;
//   }

//   return (
//     <Editor
//       height={editorHeight(code)}
//       width="100%"
//       language={language}
//       value={code}
//       defaultValue="// some comment"
//       theme="vs-dark"
//       className="bg-black"
//       options={{
//         autoIndent: false,
//         fontSize: 16,
//         automaticLayout: true,
//         colorDecorators: true,
//         folding: true,
//         foldingStrategy: "auto",
//         links: true,
//         minimap: {
//           enabled: false
//         },
//         scrollbar: {
//           vertical: 'hidden',
//           horizontal: 'hidden'
//         },
//         wordSeparators: "~!@#$%^&*()-=+[{]}|;:'\",.<>/?",
//         wordWrap: "off",
//         wordWrapBreakAfterCharacters: "\t})]?|&,;",
//         wordWrapBreakBeforeCharacters: "{([+",
//         wordWrapBreakObtrusiveCharacters: ".",
//         wordWrapColumn: 80,
//         wordWrapMinified: true,
//         wrappingIndent: "none",
//         readOnly:true,
//         cursorStyle: 'hidden',
//         scrollBeyondLastLine: false
//       }}
//     />
//   )
// }

// export default ReadOnlyEditor
