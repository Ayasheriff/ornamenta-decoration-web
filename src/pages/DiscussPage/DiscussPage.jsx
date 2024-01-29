import { Input } from "@mui/joy";
import { useState } from "react";
import "./DiscussPage.style.scss";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { User } from "iconsax-react";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    setMessages([...messages, { text: newMessage, sender: "user" }]);
    setNewMessage("");

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: " Thanks for your message!", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`chat-text-${message.sender}`}>
            <div>
              {message.sender === "user" ? (
                <User className="user-logo-chat" size="30" color="#CDD7E1" />
              ) : (
                <User
                  className="bot-logo-chat"
                  size="30"
                  color="#f2b827"
                  style={{
                    border: "1px solid #f2b827",
                    borderRadius: "50px",
                    padding: "2px",
                    margin: "0 10px",
                  }}
                />
              )}
            </div>
            <div
              className={`${
                message.sender === "user" ? "user-message" : "other-message"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="message-input">
        <Input
          className="input-texting"
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <ButtonComponent onClick={sendMessage} title={"Send"} />
      </div>
    </div>
  );
};

export default ChatPage;
