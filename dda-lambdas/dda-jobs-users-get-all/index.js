// Get all Users for specified Job
// Endpoint: /jobs/{jobId}/users

let mysql = require('mysql');
let config = require('./config.json');

let pool = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

exports.handler = (event, context, callback) => {
  console.log(event);
  context.callbackWaitsForEmptyEventLoop = false;
  pool.getConnection(function (err, connection) {
    let sqlquery = 'SELECT * FROM Users u,Users_Have_Jobs h WHERE u.code=h.userId and h.jobId="' + event['pathParameters']['jobId'] + '";';
    connection.query(sqlquery, function (error, results, fields) {
      connection.release();
      let response = {
        "isBase64Encoded": false,
        "statusCode": 200,
        "headers": {},
        "body": JSON.stringify(results)
      }
      if (error) {
        callback(error);
      } else {
        callback(null, response);
      }
    });
  });
};
