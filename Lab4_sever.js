import {expressHbs} from "express-handlebars";
const express = require("express");
const app = express();

app.engine('.hbs', expressHbs());
app.set('view engine', '.hbs');
app.set('views', './views');
app.listen(8080);

// app.get('/home', (req, res) => {
//     res.render('index');
// });
app.get('/' , (req , res)=>{
    res.send("Đây là trang chủ")
});