var mariadb = require('mysql');
var mariaUtilities = require('./maria-utilities.js');
var async = require('async');

var connection = mariadb.createConnection({
    host:     'localhost',
    user:     'root',
    password: '',
    database: 'maria'
});

mariaUtilities.introspection(connection);
mariaUtilities.upgrade(connection);
connection.connect();
async.parallel(
    [
        /*function(callback) {
         connection.queryRow('select from users where id = ?', 3, function (err, results) {
         console.log(results);
         console.log(err);
         });
         }*/

        /*function (callback) {
         connection.queryCol('select name from users where age > ?', 17, function (err, results) {
         console.log(results);
         });
         }*/

        /*function (callback) {
            connection.queryValue('select max(age) from users', [], function (err, results) {
                console.log(results);
            });
        }*/

        /*function (callback) {
            connection.queryHash("select * from users where surname like '%a%'", [], function (err, results) {
                console.log(results);
            });
        }*/

        /*function (callback) {
            connection.queryKeyValue('select name, age from users where age > ?', 20, function (err, results) {
                console.log(results);
            });
        }*/

        /*function (callback) {
            console.log(connection.where({
                id: 5,
                year: ">2010",
                price: "100..200",
                level: "<=3",
                sn: "str?",
                label: "str",
                code: "!(1,2,4,10,11)"
        }));
        }*/

        /*function (callback) {
            connection.select("notable",["name","surname"], {age: ">=18"}, {name:'desc'}, function (err, results) {
                console.log(err);
            });
        }*/

        /*function (callback) {
            connection.insert("users",{id: "7", name: "Kanye", surname: "Cliv", age: "21"},function (err, results) {
                console.log(results);
            });
        }*/

        /*function (callback) {
            connection.update("users",{name: "Sanches", surname: "Cast"},  {id: "7"}, function (err, results) {
                console.log(results);
                //console.log(err);
            });
        }*/

        /*function (callback) {
            connection.upsert("users",{id: "8", name: "Sanches", surname: "True", age: "22"}, function (err, results) {
                console.log(results);
            });
        }*/

        /*function (callback) {
            connection.delete("users",{id: "8"}, function (err, results) {
                console.log(results);
            });
        }*/

        /*function (callback) {
            connection.count("users",function (err, results) {
                console.log(results);
            });
        }*/

        /*function (callback) {
            connection.innerJoin(['users', 'students'], ['id', 'id'], {users: { age: "<20"}, students: {id: "<6"}}, function (err, results) {
                console.log(results);
            });
        }*/

        /*function (callback) {
            connection.primary('users', function (err, results) {
                console.log(results);
            });
        }*/

        /*function (callback) {
            connection.foreign('users', function (err, results) {
                console.log(results);
            });
        }*/

        /*function (callback) {
            connection.fields('students', function (err, results) {
                console.log(results);
            });
        }*/

        /*function (callback) {
            connection.databases(function (err, results) {
                console.log(results);
            });
        }*/

        /*function (callback) {
            connection.databaseTables('maria', function (err, results) {
                console.log(results);
            });
        }*/

        /*function (callback) {
            connection.tableInfo('users', function (err, results) {
                console.log(results);
            });
        }*/

        function (callback) {
            connection.users(function (err, results) {
                console.log(results);
            });
        }
    ]
);
connection.end();