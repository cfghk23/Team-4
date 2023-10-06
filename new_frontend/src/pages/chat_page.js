import Layout from '@theme/Layout';
import React, { useState } from 'react';


export default function MyReactPage() {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleSendMessage = async () => {
        //send message to localhost:5000/api/chat endpoint
        const response = await fetch('http://127.0.0.1:5000/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sms_input: inputText }),
        });
        //read the data returned from the response
        const data = await response.json();
        console.log(data.response);
        setMessages([...messages, data.response]);
        setInputText('');
    };

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <Layout>
        <div className="chatbot-layout mt-10" style={{textAlign: 'center', color: 'darkgreen'}}>
            <h1 style={{fontSize: '5rem'}}>ChatBot Page</h1>
            <div style={{fontSize: '2rem'}} className="chatbot-messages">
                {messages.map((message, index) => (
                    <p key={index}>{message}</p>
                ))}
            </div>
            
            <div className="chatbot-input">
                <input
                    type="text"
                    placeholder="Type your message"
                    value={inputText}
                    onChange={handleInputChange}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
        </Layout>
    );
}