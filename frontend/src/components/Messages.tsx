import ReactMarkdown from "react-markdown";
import React, { useState, useEffect } from "react";

const Messages = ({ storedValues }: any) => {

    const copyText = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    //console.log(storedValues);


    return (
        <>

            {
                storedValues
                    .slice(0)
                    .reverse()
                    .map((value: any, index: string) => {
                        console.log(value.question);

                        if (value.question !== '') {
                            return (
                                <>
                                    <div key={index}>

                                        <div className="list-group-item" style={{ paddingLeft: "10%", border: "none" }}>
                                            <div className="media">
                                                <div className="media-body">
                                                    <div className="message-bubble bg-success-subtle text-dark"><ReactMarkdown>{value.question}</ReactMarkdown></div>
                                                    <span className="position-absolute badge rounded-pill bg-success" style={{
                                                        right: "0px",
                                                        bottom: "8px"
                                                    }}>
                                                        Me
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item" style={{ paddingRight: "10%", border: "none" }}>
                                            < div className="media" >
                                                <div className="media-body">
                                                    <div className="message-bubble bg-warning-subtle"><ReactMarkdown>{value.answer}</ReactMarkdown></div>
                                                    <span className="position-absolute badge rounded-pill bg-warning" style={{
                                                        left: "0px",
                                                        bottom: "8px"
                                                    }}>
                                                        Isabella
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </>

                            );
                        }
                    })

            }</>

    );
};

export default Messages;