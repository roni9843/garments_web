import io from "socket.io-client";
const socket = io.connect("https://garments-backend.onrender.com/");
// const socket = io.connect("http://localhost:8080/");
export default socket;
