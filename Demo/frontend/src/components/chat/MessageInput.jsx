function MessageInput() {
  return (
    <div className="border-t p-4 flex gap-2">

      <input
        type="text"
        placeholder="Type message..."
        className="flex-1 border rounded p-2"
      />

      <button
        className="bg-blue-500 text-white px-4 rounded"
      >
        Send
      </button>

    </div>
  );
}

export default MessageInput;