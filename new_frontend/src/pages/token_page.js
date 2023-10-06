import Layout from '@theme/Layout';
import React, { useState } from 'react';

export default function MyReactPage() {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleSendMessage = async () => {
        //send message to localhost:5000/api/chat endpoint
        const response = await fetch('http://127.0.0.1:5000/api/badge_gen', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        //read the data returned from the response
        const data = await response.json();
        console.log(data.response);
        setMessages([...messages, data.response]);
        setInputText('');
    };

    const handleGenerateMural = async () => {
        // loop through messages array and call handleSendMessage for each message
        for (let i = 0; i < 9; i++) {
            setInputText(messages[i]);
            await handleSendMessage();
        }
    };

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <Layout>
        <div className="chatbot-layout">
            <h1>Tokens Page</h1>
            <div className="chatbot-messages">
                {messages.map((message, index) => (
                    <img key={index} src={message} alt="chatbot message" />
                ))}
            </div>
            {inputText === '' && (
                <button onClick={handleGenerateMural}>Generate Mural</button>
            )}
            <div className="chatbot-input">
                <input
                    type="text"
                    placeholder="Type your message"
                    value={inputText}
                    onChange={handleInputChange}
                    disabled={messages.length > 0}
                />
                <button onClick={handleSendMessage} disabled={messages.length > 0}>
                    Send
                </button>
            </div>
        </div>
        </Layout>
    );
}