const { Server: ServerIO } = require('socket.io')
const http = require('http')

const express = require("express");
const morgan = require("morgan");
const path = require("path")
const routes = require("./routes/routeProductos.js");

const ContenedorChat = require("./classChat");
const { options } = require("./DB/configDB.js");
const contenedorChat = new ContenedorChat(options.sqlite, "mensajes");

const app = express();
const ServerHttp = http.createServer(app)

const io = new ServerIO(ServerHttp)

  
io.on("connection", async (socket) => {
  console.log(`Cliente ${socket.id} conectado con sockets`);
  
  const mensajes = await contenedorChat.findAll()
  socket.emit("messages", mensajes);

  socket.on("new-message",async (data) => {
    await contenedorChat.create(data)
    const mensajes = contenedorChat.findAll()
    io.sockets.emit("messages", mensajes);
  });
});


//settings
app.set("port", process.env.PORT || 8080);
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.url} -${req.method}`)
  next()
})

//Static files
app.use(express.static(path.join(__dirname + '/public')));

//Routes
app.use(routes);

// Starting the server
try {
  ServerHttp.listen(app.get("port"), () => {
    console.log(`Server escuchando en puerto ${app.get("port")}`);
  });
} catch (err) {
  console.error("Error de conexión en server...", err);
}

