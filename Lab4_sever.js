const Hbs = require("express-handlebars");
const express = require("express");
const path = require("path");
const app = express();

app.engine('hbs', Hbs.engine());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
console.log(path.join(__dirname, 'views'));
app.listen(8080);

app.get('/', (req, res) => {
    res.render('home');
});
// app.get('/' , (req , res)=>{
//     res.send("Đây là trang chủ")
// });