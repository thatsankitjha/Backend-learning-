import { useState } from "react";

import ChatMessages from "../components/chat/ChatMessages";
import ChatUsers from "../components/chat/ChatUsers";
import MessageInput from "../components/chat/MessageInput";

function Chat() {

  const [selectedUser, setSelectedUser] = useState(null);
 const [inputMessage, setInputMessage] = useState("");

//  const sendMessage = () =>{
//   console.log("sendMessage")
//  }

// const sendMessage = () => {
//   if (!selectedUser || !inputMessage.trim()) return;

//   console.log(selectedUser.id);
//   console.log(inputMessage);
// };



const sendMessage = () => {
  if (!selectedUser || !inputMessage.trim()) return;

  setMessageData((prev) => ({
    ...prev,

    [selectedUser.id]: [
      ...(prev[selectedUser.id] || []),

      {
        text: inputMessage,
        sender: "me",
      },
    ],
  }));

  setInputMessage("");
};

 const[ messagesData,setMessageData]= useState ({
  1: [
    { text: "Hello Ankit", sender: "other" },
    { text: "How are you?", sender: "other" },
  ],

  2: [
    { text: "Hi Mehul Sir", sender: "other" },
    { text: "Project completed?", sender:"other" },
  ],

  3: [
    { text: "Hello Ritika", sender:"other" },
  ],

  4: [
    { text: "Hi Vicky Sir", sender:"other" },
  ],
});


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


        <MessageInput 
        inputMessage={inputMessage}
         setInputMessage={setInputMessage}
         sendMessage={sendMessage}
          />

      </div>

    </div>
  );
}

export default Chat;