function ChatUsers({ selectedUser, setSelectedUser }) {
  return (
    <div className="w-72 border-r p-4">

      <h2 className="font-bold text-xl mb-4">
        Users
      </h2>

      <div
        onClick={() =>
          setSelectedUser({
            id: 1,
            name: "Ankit",
          })
        }
        className={`p-3 rounded mb-2 cursor-pointer ${
          selectedUser?.name === "Ankit"
            ? "bg-blue-500 text-white"
            : "bg-gray-100"
        }`}
      >
        Ankit
      </div>

      <div
        onClick={() =>
          setSelectedUser({
            id: 2,
            name: "Mehul Sir",
          })
        }
        className={`p-3 rounded mb-2 cursor-pointer ${
          selectedUser?.name === "Mehul Sir"
            ? "bg-blue-500 text-white"
            : "bg-gray-100"
        }`}
      >
        Mehul Sir
      </div>

      <div
        onClick={() =>
          setSelectedUser({
            id: 3,
            name: "Ritika",
          })
        }
        className={`p-3 rounded mb-2 cursor-pointer ${
          selectedUser?.name === "Ritika"
            ? "bg-blue-500 text-white"
            : "bg-gray-100"
        }`}
      >
        Ritika
      </div>

      <div
        onClick={() =>
          setSelectedUser({
            id: 4,
            name: "Vicky Sir",
          })
        }
        className={`p-3 rounded mb-2 cursor-pointer ${
          selectedUser?.name === "Vicky Sir"
            ? "bg-blue-500 text-white"
            : "bg-gray-100"
        }`}
      >
        Vicky Sir
      </div>

    </div>
  );
}

export default ChatUsers;