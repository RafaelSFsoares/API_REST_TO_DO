const userDao = require("../src/dao/userDAO")

const userModel = require("../models/use")

test ("should save a seuser in the database", () => {
    const user = new userModel(
        "Rafael Soares",
        "rafaelsfsaores@gmail.com",
        "senhadorafão"
    );
    userDao.saveUser(user).then((result) => {
        expect(result).toBe(true);
    });

});