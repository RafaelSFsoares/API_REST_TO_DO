const sqlite = require ('sqlite3').verbose()

const db = new sqlite3.Database("src/infra/db.sql");