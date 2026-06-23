import { useState } from "react";

import ChatMessages from "../components/chat/ChatMessages";
import ChatUsers from "../components/chat/ChatUsers";
import MessageInput from "../components/chat/MessageInput";

function Chat() {

  const [selectedUser, setSelectedUser] = useState(null);
 const [inputMessage, setInputMessage] = useState("");


 const messagesData = {
  1: [
    { text: "Hello Ankit" },
    { text: "How are you?" },
  ],

  2: [
    { text: "Hi Mehul Sir" },
    { text: "Project completed?" },
  ],

  3: [
    { text: "Hello Ritika" },
  ],

  4: [
    { text: "Hi Vicky Sir" },
  ],
};


  return (
    <div className="h-[85vh] flex border rounded-lg overflow-hidden">


    <ChatUsers
  selectedUser={selectedUser}
  setSelectedUser={setSelectedUser}
/>

      <div className="flex flex-col flex-1">

<div className="border-b p-4 font-bold">
  {selectedUser ? selectedUser.name : "Select User"}
</div>



        <ChatMessages messages={selectedUser ? messagesData[selectedUser.id] : []} />


        <MessageInput inputMessage={inputMessage} setInputMessage={setInputMessage} />

      </div>

    </div>
  );
}

export default Chat;