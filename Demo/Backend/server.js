const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
const authRoutes = require("./routes/userRouter");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const profileRoutes = require("./routes/profileRoutes");


const messageRoutes = require("./routes/messageRoutes");
const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5174",
    credentials: true,
  },
});


//    runs when new client connnect to socket
io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

socket.emit("welcome", "Welcome to Socket Ankit ");


  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
});


app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/", messageRoutes);


app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose
  .connect("mongodb://127.0.0.1:27017/mydatabase")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/profile", profileRoutes);

server.listen(3000, () => {
  console.log("Server Running");
});
