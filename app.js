

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

var items = [];
var workItems = [];

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get("/", function (req,res) {
    
    //to give response when home route is requested
    let d = (date.getDate());
    res.render("list", {listName : d, newListItems : items});

});

app.post("/", function (req,res) {
    let  li = (req.body.new_task);
   
    //to add two types of list, one with date and other with work as heading  
    let currList = req.body.list;
    if(currList == "Work"){
        workItems.push(li);
        res.redirect("/work");
    } 
    else{
        items.push(li);
        res.redirect("/");
    }
 
});

app.get("/work", function (req,res) {

   //to give response if work route is requested 
   res.render("list", {listName : "Work", newListItems : workItems}) 
});

app.get("/about", function (req,res) {
    res.render('about');
})

app.listen(3000, function (req,res) {

     console.log("server is running on port 3000. ");
});