
function MessageInput({
  inputMessage,
  setInputMessage,
  sendMessage,
}) {


  console.log(inputMessage);


  // const [selectedUser, setSelectedUser] = useState(null);
  // const [inputMessage, setInputMessage] = useState("");
  // const sendMessage = () =>{
  //   console.log("send clicked")
  // }
// const sendMessage = () => {
//   if (!selectedUser || !inputMessage.trim()) return;

//   console.log(selectedUser.id);
//   console.log(inputMessage);
// };



  return (
    <div className="border-t p-4 flex gap-2">

      <input
        type="text"
        placeholder="Type message..."
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        className="flex-1 border rounded p-2"
      />

      <button onClick={sendMessage}
        className="bg-blue-500 text-white px-4 rounded"
      >
        Send
      </button>

    </div>
  );
}

export default MessageInput;