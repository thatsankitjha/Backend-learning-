import { useState } from "react";

import ChatMessages from "../components/chat/ChatMessages";
import ChatUsers from "../components/chat/ChatUsers";
import MessageInput from "../components/chat/MessageInput";

function Chat() {

  const [selectedUser, setSelectedUser] = useState(null);

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



        <ChatMessages />
        <MessageInput />

      </div>

    </div>
  );
}

export default Chat;