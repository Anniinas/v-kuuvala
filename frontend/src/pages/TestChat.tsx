import React, { useEffect, useRef, useState } from "react";

import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from "openai";

import ChatForm from "../components/ChatForm";
import Messages from "../components/Messages";

export const TestChat = () => {

    const configuration = new Configuration({
        organization: process.env.REACT_APP_OPENAI_ORG_ID,
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });

    const [storedValues, setStoredValues] = useState([{ question: "", answer: "" }]);
    delete configuration.baseOptions.headers["User-Agent"];

    const openai = new OpenAIApi(configuration);

    const messageListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollToBottom();
    }, [storedValues]);

    const scrollToBottom = () => {
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
    };

    const generateResponse = async (newQuestion: string, setNewQuestion: string) => {

        setStoredValues([
            {
                question: newQuestion,
                answer: "...",
            },
            ...storedValues,
        ])

        try {
            // Send a request to OpenAI
            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo-0301",
                temperature: 0.9,
                frequency_penalty: 0.7,
                presence_penalty: 0.7,
                messages: [
                    {
                        role: "system",
                        content:
                            "We are now role-playing and you are professional horse riding teacher Isabella Santoro on a equine center. Write Isabella's next reply in a fictional chat between Isabella and student. Write 1 reply only in internet RP style, italicize actions, and avoid quotation marks. Use markdown. Be proactive, creative, and drive the plot and conversation forward. Write at least 1 paragraph, up to 4. Always stay in character and avoid repetition. Stay always in character. Here is her character description: A renowned Italian dressage instructor with a refined and elegant riding style. Isabella's expertise in classical dressage techniques and her passion for the art of dressage make her a sought-after instructor worldwide. Her dedication to precision and harmony between horse and rider would bring a unique perspective to the equine center.",
                    },
                    {
                        role: "system",
                        content:
                            "For this roleplay lets play scene where I'm a riding student and coming for a lesson. You stand middle of a riding arena giving me insturctions what to do.  \n\nRules and guides:\nWhen character acts, use italicize text in markdown formatting, example below:\n*Isabella opens riding arena's gate and steps in.* \n\nWhen character says something at loud don't add anything, example below:\n Welcome to our horsey haven! So glad to have you here. Let's saddle up and get ready for an amazing ride!\n\nYou can only write what your character (Isabella) does.\n\nBe creative and use 3rd person when roleplaying with me. We are taking turns I will start. No more than 100 words on one turn. Keep your text in a one paragraph.\n\nHere is an example of a one turn:\n*I just saddled up my horse and I'm ready for todays riding class. It's nice spring evening.* Hi Isabella, what we are learning today? *I pet my horse*",
                    },
                    { role: "user", content: newQuestion },
                ]
            });
            // Response will be in that precise text, but you can explore the full object if you want to
            //console.log(completion.data.choices[0]);


            if (completion.data.choices[0].message) {
                setStoredValues([
                    {
                        question: newQuestion,
                        answer: completion.data.choices[0].message.content,
                    },
                    ...storedValues,
                ]);
                //setNewQuestion("test");
            }
            //res.send(completion.data.choices[0].text);
        } catch (error: any) {
            if (error.response) {
                console.error(error.response.status);
                console.error(error.response.data);
            } else {
                console.error(error.message);
            }
        }
    }

    //generateResponse("Is this working", "");



    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4">Chat Testing...</h1>
                    <p>Here you can test roleplaying with our staff</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <img src={require('../img/chat/isabella.jpg')} />
                </div>
                <div className="col-md-8">
                    <div className="list-group message-list" ref={messageListRef}>
                        <Messages storedValues={storedValues} />
                    </div>
                    <div className="input-group">
                        <ChatForm generateResponse={generateResponse} />
                        { /* 
                        <input type="text" className="form-control" placeholder="Type your message..." />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">Send</button>
                        </div>
                        */ }
                    </div>
                </div>

            </div >
        </>
    );
};
