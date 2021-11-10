const express = require('express')

const usuarios = require ("./controllers/UsersControllers/UsersControllers.js")
const tarefas = require ("./controllers/TaskControllers/TaskControllers.js")

const { PORT, APP_NAME } = require ("./util/appConfig")

const app = express()


app.get('/', (req, res) => {
  res.send(`${APP_NAME}`)

})

app.get("/usuarios", usuarios)
app.get("/tarefas", tarefas)


app.listen(PORT, () => {
  console.log(`${APP_NAME} listening at http://localhost:${PORT}`)
})

