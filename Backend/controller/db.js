import sql from 'mysql2';

const db = sql.createConnection({
    host:"localhost",
    user: "root",
    password: "password",
    database: "Todo"
})

db.connect ((err)=>{
    if(err) return console.log(err);
    console.log("DataBase Connected")
})


export default db;
