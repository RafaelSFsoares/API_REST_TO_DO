class UsersControllers {
    show = (req, res) => {
    res.send('Rota ativada com GET e recurso usuario: valores de usuario devem ser retornados')
}
    save = (req, res) => {
        res.send ("testando post users")
    };
}




module.exports = UsersControllers;