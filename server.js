  var fs = require('fs');
var http = require('http');
var url = require('url');
var http = require('http');
var formidable = require('formidable');
var utils = require('./utils.js'); 
var student = require('./student.js');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");

//   http.createServer(function (req, res) {
//   //Open a file on the server and return its content:
//   fs.readFile('bootstrap.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 
//     // 'text/plane'
//     'text/html'
//   });
//     res.write(data);
//     console.log("start");
//     return res.end();
//   });
// }).listen(8080);

// const express = require("express");
// const app = express();

// app.listen(3000, () => {
//   console.log("Application started and Listening on port 3000");
// });



// function divideTwo (a,b) {
//   if (typeof  a == 'number' && typeof  b == 'number') {
//     return "Result "+ a +" and "+b +": " + (a/b);
//   } else if (typeof a != 'number') {
//     return a + " is not a number";
//   } else if (typeof b != 'number') {
//       return b + " is not a number";
//   }else {
//     return "Unexpected result"
//   }
// };



// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month + " " + q.day;
//   var query = url.parse(req.url, true);
//   var txt = q.year + " " + q.month + " " + q.day;
//   console.log (query.host);
//   console.log (query.search);
//   console.log (query.pathname);
//   res.write("Date: "+txt+'\n');
//   res.write("Sum of 6 and 7: "+ utils.sumTwo(6,7));
//   res.write('\n' +divideTwo(7,4));
//   return res.end();
// }).listen(3030);



// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   let student_1 = new student('Ha Tran Ngoc Minh', 'PH27570');
//   res.write(student_1.getInfor());
//   return res.end();
// }).listen(3030);

// http.createServer(function (req, res) {
//   fs.writeFile("data.json",'{"compilierOptions" : { "modules":"commonjs","target":"ES6"}}',function(err){
//     if(err) throw err;
//     console.log('Saved!');
//     res.write();
//     return res.end();
//   });

// }).listen(8080);




// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       var oldpath = files.filetoupload.filepath;
//       var newpath = 'D:\File Study\Server_Android\Bootstrap_Tutorial' + files.filetoupload.originalFilename;
//       fs.rename(oldpath, newpath, function (err) {
//         if (err) throw err;
//         res.write('File uploaded and moved!');
//         res.end();
//       });
//  });
//   } else {
//       fs.readFile('upload.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     });
//   }
// }).listen(8080);




// upload file to sever use express

http.createServer(function (req, res) {
  if (req.url == '/upfile') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;

      let time = new Date().getTime();
      console.log(time);

      var newpath = 'D:\.File Study\Server_Android\Bootstrap_Tutorial\image' + time + files.filetoupload.originalFilename;

      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="upfile" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);




// upload file to sever use multer

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname));
// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "//upload.html");
// });

// var storage = multer.diskStorage({
//   destination:function (req, file, cb) {
//     // if (file.mimetype == "image.jpg"||
//     //   file.mimetype == 'image.png') {
//         cb(null, 'image');
//     // } else {
//       // cb(new Error('not image'), false);
//     // }
//   },
//     filename:function (req, file, cb) {
//       cb(null, Date.now()+'.jpg');
//     }
// });

// var upload = multer({storage:storage});

// app.post("/", upload.single('filetoupload'), (req, res, next) => {
//   const file = req.file;
//   if (!file) {
//     const err = new Error("Chon mot file");
//     return next(err);
//   }
//   res.send("Upload thanh cong")
// });
// app.listen(8080);