import { useState, useRef, useEffect } from "react";
import chatboticon from "../assets/Icons/ChatBot.png";
import { getGeminiResponse } from "../utils/gemini";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "model", parts: [{ text: "Hello! 👋 I'm your AI assistant for Crackers Website. How can I help you today?" }] }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput("");
    
    // Add user message to UI
    setMessages((prev) => [
      ...prev,
      { role: "user", parts: [{ text: userMessage }] }
    ]);

    setIsLoading(true);

    // Prepare history for Gemini (API requires history to start with a 'user' message)
    const history = messages
      .filter((msg, index) => !(index === 0 && msg.role === "model")) // Skip initial bot greeting
      .map(msg => ({
        role: msg.role,
        parts: msg.parts
      }));

    const response = await getGeminiResponse(userMessage, history);

    // Add bot response to UI
    setMessages((prev) => [
      ...prev,
      { role: "model", parts: [{ text: response }] }
    ]);
    
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      <img
        className="chatbot-button-icon"
        src={chatboticon}
        alt="ChatBot"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <span>🎆 AI Assistant</span>
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✖
            </button>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.role === "user" ? "user-message" : "bot-message"}
              >
                {msg.parts[0].text}
              </div>
            ))}
            {isLoading && (
              <div className="bot-message">
                <span className="typing-dots">Thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-footer">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <button onClick={handleSend} disabled={isLoading}>
              {isLoading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;