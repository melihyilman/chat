var socket = io("/");

var message = document.getElementById("message");
var button = document.getElementById("send");
var username = document.getElementById("username");
var output = document.getElementById("output");

button.addEventListener("click", () => {
  console.log("click");
  socket.emit("sendingMessage", {
    message: message.value,
    username: username.value,
  });
});
// socket.on("connection", function (socket) {
//   console.log("made socket connection");
//   socket.on("chat", function (data) {
//     // io.sockets.emit('chat',data);
//     console.log(data);
//   });
// });
socket.on("broadCast", (data) => {
  console.log("broadcast");
  output.innerHTML += `<p><strong>${data.username}</strong>${data.message}</p>`;
});
