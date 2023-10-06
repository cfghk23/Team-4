import ChatBot from 'react-simple-chatbot';
import React from 'react';
import { ThemeProvider } from 'styled-components';

export default function ChatPage() {
  const steps = [
    {
      id: '0',
      message: 'Hey Geek!',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Please write your username',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, how can I help you?',
      trigger: '4',
    },
    {
      id: '4',
      options: [
        { value: 1, label: 'View Courses' },
        { value: 2, label: 'Read Articles' },
      ],
      end: true,
    },
  ];

  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Arial, sans-serif',
    headerBgColor: '#197B22',
    headerFontColor: '#fff',
    headerFontSize: '24px',
    botBubbleColor: '#0F3789',
    botFontColor: '#fff',
    userBubbleColor: '#FF5733',
    userFontColor: '#fff',
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Einstein Bot"
          steps={steps}
          botAvatar="https://example.com/bot-avatar.png" // Replace with the URL of your bot's avatar
          userAvatar="https://example.com/user-avatar.png" // Replace with the URL of the user's avatar
          style={{ width: '100%', maxWidth: '600px', height: '100%', maxHeight: '600px' }}
        />
      </ThemeProvider>
    </div>
  );
}