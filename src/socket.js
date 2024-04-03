import io from "socket.io-client";

let socket;

// let url = "http://localhost:3001"
let url = "https://chat-server-6eo8.onrender.com/";

function connectSocket(user_id) {
  socket = io(url, {
    query: `user_id = ${user_id}`,
  });
}

//
export { socket, connectSocket };
