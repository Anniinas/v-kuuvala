import MarkdownEditor from "@uiw/react-markdown-editor";
import React, { useState, useEffect } from "react";

const ChatForm = ({ generateResponse }: any) => {
  const [newQuestion, setNewQuestion] = useState("");
  const [markdown, setMarkdown] = useState("");

  //console.log(newQuestion);

  return (

    <>
      <div className="input-group">
        <textarea rows={3} className="form-control" placeholder="Type your message..." onChange={(event) => setNewQuestion(event.target.value)} value={newQuestion} />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={() => { generateResponse(newQuestion); setNewQuestion("") }}>Send</button>
        </div>
      </div>
      {/*
      <MarkdownEditor
        style={{
          height: 150,
          width: 600,
        }}
        value={markdown}
        onChange={(value: any, viewUpdate: any) => setMarkdown(value)}
        toolbars={["bold", "italic"]}
      />

      <button
        className="btn btn-lg btn-secondary fw-bold border-white bg-primary text-white"
        onClick={() => generateResponse(markdown, setMarkdown)}
      >
        Get response
      </button> */}
    </>


  );
};

export default ChatForm;