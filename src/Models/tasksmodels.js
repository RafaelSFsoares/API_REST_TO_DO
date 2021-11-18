
class TasksModel {
    constructor(titulo, descricao, status){
            
            this.titulo = titulo;
            this.descricao = descricao;
            this.status = status;
            this.data_criacao = new Date().toLocaleString();
            
    }
}

module.exports = TasksModel;