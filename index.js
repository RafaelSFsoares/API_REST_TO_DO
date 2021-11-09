const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('API ToDo API')

})

app.get('/usuarios', (req, res) => {
  res.send('Rota ativada com GET e recurso usuario: valores de usuario devem ser retornados')

})

app.get('/tarefas', (req, res) => {
    res.send('Rota ativada com GET e recurso tarefas: valores de tarefas devem ser retornados')
  
  })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})