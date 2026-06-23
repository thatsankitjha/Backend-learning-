function ChatMessages({ messages }) {
  return (
    <div className="flex-1 p-4 overflow-y-auto">

      {messages.map((msg, index) => (
        <div
          key={index}
          className="bg-gray-200 p-2 rounded w-fit mb-2"
        >
          {msg.text}
        </div>
      ))}

    </div>
  );
}

export default ChatMessages;