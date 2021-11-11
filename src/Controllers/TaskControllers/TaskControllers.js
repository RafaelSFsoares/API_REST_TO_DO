class TaskControllers {
    show =(req, res) => {
    res.send('Rota ativada com GET e recurso tarefa: valores de tarefa devem ser retornados')
}
    save = (req, res) => {
    res.send ("testando post tasks")
};
}


module.exports = TaskControllers;