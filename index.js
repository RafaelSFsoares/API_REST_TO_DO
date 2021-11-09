const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('API ToDo API')

})


  function usuarios(req, res) {
      res.send('Rota ativada com GET e recurso usuario: valores de usuario devem ser retornados')
  }

  
  function tarefas(req, res) {
    res.send('Rota ativada com GET e recurso usuario: valores de usuario devem ser retornados')
}

app.get("/usuarios", usuarios)
app.get("/tarefas", tarefas)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

