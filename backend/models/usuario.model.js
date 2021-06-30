const dbConnection = require('../configuration/dbConnection');

const getUsuario = async (user) => {
    var queryRequest = 'SELECT id FROM users ';
    queryRequest += 'where user=\'' + user.usuario + '\' and password=\'' + user.password + '\'';
    const db = await executeQuery(queryRequest);
    return db;
};

const setUsuario = async (usuarioData) => {
    var queryRequest = 'INSERT INTO users (user, password, mail) VALUES (';
    queryRequest += '\'' + usuarioData.usuario +'\',\'' + usuarioData.password +'\',\'' + usuarioData.mail + '\');';
    const db = await executeQuery(queryRequest);
    return db;
};

function executeQuery(queryRequest) {
    const connection = dbConnection();
    return new Promise((resolve, reject) => {
        connection.query(queryRequest, (err, res) => {
      if (err) {
        console.log('err');
       return reject(err)
      }
      connection.end();
      return resolve(res);
     })
    })
}

module.exports = {
    getUsuario,
    setUsuario,
};

