/*
@xialuo 主要用来mongodb数据库增删查改测试
*/
var http = require('http');
var url = require('url');
var mongo=require("mongodb");
var host="localhost";
var port=27017;
var server=new mongo.Server(host,port,{auto_reconnect:true});//创建数据库所在的服务器服务器
var db=new mongo.Db("OverseasStudy",server,{safe:true});//创建数据库对象

db.open(function (err,db) {//连接数据库
  if(err)
    throw err;
  else{
    console.log("成功建立数据库连接");
      db.collection("users", function (err,collection) {
      collection.insert({username:"盼盼",firstname:"李"}, function (err,docs) {
        console.log(docs)
        // db.close();
      });
    });        
    // db.close();
  }
});

db.on("close", function (err,db) {//关闭数据库
   if(err) throw err;
   else console.log("成功关闭数据库.");
});

http.createServer(function (req, res) {
  var path = url.parse(req.url).pathname;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(path);
}).listen(8888, "127.0.0.1");



