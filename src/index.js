const express = require('express')

const UsersControllers = require ("./controllers/UsersControllers/UsersControllers.js")
const TasksControllers = require ("./controllers/TaskControllers/TaskControllers.js")

const { PORT } = require ("./util/appConfig")

const app = express()

const users = new UsersControllers();
const tasks = new TasksControllers();

app.get('/', (req, res) => {
  res.send("TO AQUI")

})

app.get("/users", users.show)
app.post("/users", users.save)

app.get("/tasks", tasks.show)


app.listen(PORT, () => {
  console.log(` listening at http://localhost:${PORT}`)
})

