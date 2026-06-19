import ChatMessages from "../components/chat/ChatMessages";
import ChatUsers from "../components/chat/ChatUsers";
import MessageInput from "../components/chat/MessageInput";



function Chat(){
    return ( 
        <div className="h-[85vh] flex border rounded-lg overflow-hidden">

<ChatUsers/>


<div className="flex flex-col flex-1">

<div className="border-b p-4 font-bold">
Select  Users
</div>

<ChatMessages/>
<MessageInput/>


</div>

        </div>
    )
}
export default Chat;