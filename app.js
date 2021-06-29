var express = require("express"),  path = require('path');
var app = express();
var port = process.env.port || 8000;

var mongoose = require("mongoose");
var config = require("./config");

// ket noi csdl
//mongoose.connect(config.getDbConnectionString());
//

var bodyParser = require("body-parser");
var morgan = require("morgan");
//app.use("/assets", express.static(__dirname + "/public"));
app.use("/theme.html",express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));


app.set("view engine","ejs");

app.get("/", function(req, res){
    res.render("abizin");
})


app.listen(port, function(){
    console.log("App chạy thành công trên port: "+ port);
})
