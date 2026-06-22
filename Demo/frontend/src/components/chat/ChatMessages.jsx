function ChatMessages() {
  return (
    <div className="flex-1 p-4 overflow-y-auto">

      <div className="bg-blue-500 text-white p-2 rounded w-fit ml-auto mb-2">
        Hello
      </div>

      <div className="bg-gray-200 p-2 rounded w-fit mb-2">
        Hi
      </div>

      <div className="bg-blue-500 text-white p-2 rounded w-fit ml-auto">
        How are you?
      </div>
{/* 
          <div className="bg-gray-200 p-2 rounded w-fit mb-2">
        fine
      </div> */}

    </div>
  );
}

export default ChatMessages;