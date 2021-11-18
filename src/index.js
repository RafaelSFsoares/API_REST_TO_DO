const express = require('express')

const UserControllers = require ("./controllers/UsersControllers/UsersControllers.js")
const TaskControllers = require ("./controllers/TaskControllers/TaskControllers.js")

const { PORT } = require ("./util/appConfig")

const app = express()

//const users = new UserControllers();
//const tasks = new TasksControllers();



app.use((req, res, next) => {
  console.log(req.headers.host, new Date().toLocaleTimeString());
  //headers pega o cabeçalhos da requisição(quem enviou, o agente(chrome/firefox), tipo do conteúdo (json etc) e o tamanho do conteúdo)
  next(); //sempre que for criar middleware use essa função.
  //como middleware eles devem sempre ficar entre
})


app.use(express.json()); // requisições feitas pelo usuario(middleware)



app.get('/', (req, res) => {
  res.send("TO AQUI")

});



app.get("/users/:nome", UserControllers.show)
app.post("/users", UserControllers.index) // fazer o index la na UsersControllers
app.post("/users", UserControllers.save)
app.delete("/users/:nome", UserControllers.remove)


app.get("/tasks/:titulo", TaskControllers.show)
app.get("/tasks/", TaskControllers.index) 
app.post("/tasks", TaskControllers.save)
app.delete("/tasks/:titulo", TaskControllers.remove)
app.put("/tasks/:titulo", TaskControllers.update)



app.listen(PORT, () => {
  console.log(` listening at http://localhost:${PORT}`)
})

