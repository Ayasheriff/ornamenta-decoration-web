import { Input } from '@mui/joy';
import  { useState } from 'react';
import "./DiscussPage.style.scss";
import { Container } from 'react-bootstrap';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    // Logic to send the message to the backend
    setMessages([...messages, { text: newMessage, sender: 'user' }]);
    setNewMessage('');
  };

  return (
    <Container>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={message.sender === 'user' ? 'user-message' : 'other-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <Input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </Container>
  );
};

export default ChatPage;
