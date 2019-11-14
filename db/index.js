let mysql  = require('mysql')


const pool = mysql.createPool({
    connectionLimit: 100,
    host     : process.env.MYSQL_HOST,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DB,
});

const query = (q) => {
    return new Promise((resolve, reject) => { 
        pool.getConnection((error, connection) => {
            if (error) throw error;
            connection.query(q, function(err, results) {
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
                connection.destroy();
            });
        });
    })
}

export default { query }