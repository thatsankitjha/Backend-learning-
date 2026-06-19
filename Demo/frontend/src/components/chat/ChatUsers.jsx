function ChatUsers() {
    return(
        <div className="w-72 border-r p-4"> 

<h2 className= "font-bold text-xl mb-4">Users</h2>


<div onClick={()=> console.log("Ankit Clicked")}
className= "p-3 bg-gray-100 rounded mb-2">
Ankit 
</div>

<div className= "p-3 bg-gray-100 rounded mb-2">
Mehul Sir 
</div>


<div className= "p-3 bg-gray-100 rounded mb-2">
Ritika  
</div>


<div className= "p-3 bg-gray-100 rounded mb-2">
vicky sir 
</div>
        </div>
    );
}

export default ChatUsers;