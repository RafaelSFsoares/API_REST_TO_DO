const taskRequire = require ("../../Models/tasksmodels");

const { tasksDB } = require ("../../infra/bd");

const TasksModel = require('../../Models/tasksmodels');

const {uuid} = require ("uuidv4");

class TaskControllers {
    constructor(dbConn) {
        this.dbConn = dbConn;
    }

    show = (req, res) => {
        const titulo = req.params.titulo

        this.dbConn.forEach((task) =>{
            if(task.titulo === titulo){
                res.send(task);
            }
        });
    };   

    index = (req, res) =>{
        res.send(this.dbConn);
    };

        save = (req, res) => {
            const {titulo, descricao, status} = req.body;

            const tasks = new TasksModel(titulo, descricao, status);

            // salva no banco
            this.dbConn.push(tasks);

            
            res.send(tasks)
    };


    remove = (req, res) => {
        const titles = req.params.titulo

        this.dbConn = this.dbConn.filter((t) =>{
         t.titulo === titulo;  
        });

        const index = this.dbConn.indexOf(task[0]);

        this.dbconn.splice(index, 1);

        console.log(this.dbConn);

        res.send("teste");
        
        
    }


    update = (req, res) => {
        const titulo = req.params.titulo;
        const content = req.body;


        for (let i = 0; i < this.dbConn.length; i++){
            if ((this.dbConn[i].titulo = titulo)){
                this.dbConn[i] = content
            }
        }


        // this.dbConn.forEach((task) =>{
        //     if(task.titulo === titulo){
        //         task = content;
        //     }
        // });

            res.send(`tasks:${titulo} porta sendo utilizada`)

    }
};


    
    
module.exports = new TaskControllers(tasksDB);










// class TaskControllers {
//     constructor(dbConn){
        
//         this.dbConn = dbConn;
//     }
    
    // show =(req, res) => {

    // this.dbConn.forEach(task =>{
    //     if(task.titulo === req.params.titulo){
    //         res.send(task);
    //     }
    // })

//     console.log(req.params.titulo);

//     const taskShow = new taskRequire("Tibuço", "amigão", "ativo", "16/11/2021")    

//     res.send(taskShow)
// }
//     save = (req, res) => {

//     const taskSave = new taskRequire(uuid(),req.body.titulo, req.body.descricao, req.body.status, req.body.dataDeCriacao)  

//     this.dbConn.push(taskSave) 

//     res.send (taskSave);
// };
// }


module.exports = new TaskControllers(tasksDB);