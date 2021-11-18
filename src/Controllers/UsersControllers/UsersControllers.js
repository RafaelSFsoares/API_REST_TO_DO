const usersRequire = require ("../../Models/usersmodels");

const { userDB } = require ("../../infra/bd")


const {uuid} = require ("uuidv4")

class UsersControllers {
    constructor(dbConn){
        this.dbConn = dbConn;
    }

    show = (req, res) => {
        const nome = req.params.nome;
    
        this.dbConn.forEach((user) => {
          if (user.nome === nome) {
            res.send(user);
          };
        });
      };

    index = (req, res) =>{
    res.send(this.dbConn);
    };


    save = (req, res) => {
        const { nome, email, senha } = req.body;
    
        const users = new UsersModel(nome, email, senha);
    
        // salva no banco
        this.dbConn.push(users);
    
        res.send(users);
      };

    


    remove = (req, res) => {

        const { nome } = req.params

        this.dbConn = this.dbConn.filter((user) =>{
         user.nome === nome;  
        });

        const index = this.dbConn.indexOf(user[0]);

        this.dbconn.splice(index, 1);

        console.log(this.dbConn);

        res.send("teste");
        
        
    }

    
}


module.exports = new UsersControllers(userDB);




// save = (req, res) => {

    //     const userSave = new usersRequire(uuid(),req.body.nome,req.body.email,req.body.senha)

    //     console.log(req.body) //lembrar de colocar o console.log

    //     this.dbConn.push(userSave) 

    //     res.send (userSave)
    // }; exemplo feito na breakout com o grupo