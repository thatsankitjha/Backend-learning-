function ChatMessages({ messages }) {
  return (

    
    <div className="flex-1 p-4 overflow-y-auto">

{messages.map((msg, index) => (
  <div
    key={index}
    className={`mb-2 ${
      msg.sender === "me"
        ? "text-right"
        : "text-left"
    }`}
  >
    <div
      className={`inline-block p-2 rounded ${
        msg.sender === "me"
          ? "bg-blue-500 text-white"
          : "bg-gray-200"
      }`}
    >
      {msg.text}
    </div>
  </div>
))}




{/* 
      {messages.map((msg, index) => (
        <div
          key={index}

          
          className="bg-gray-200 p-2 rounded w-fit mb-2"
        >
          {msg.text}
        </div>
      ))} */}

    </div>
  );
}

export default ChatMessages;