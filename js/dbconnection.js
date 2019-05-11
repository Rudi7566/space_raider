var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gamedb",
  port: 3308
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM p_user", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

export default con;



score = 228;
