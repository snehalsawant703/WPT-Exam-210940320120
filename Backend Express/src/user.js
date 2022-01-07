const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project1",
};

async function add(message)
{
    const connection =mysql.createConnection(dbinfo);
    await connection.connectAsync();

    let sql = `INSERT INTO message(message) VALUES (?)`;
    await connection.queryAsync(sql,[message.message]);
    await connection.endAsync();
}

async function select()
{
    const connection =mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("connection successfull");

    let sql = `SELECT * FROM message`;
    const list= await connection.queryAsync(sql,  []);
    await connection.endAsync();
    console.log(list);
    return list;
}

module.exports={select, add}
select();
//add({message : "hello this is my 2nd message"});