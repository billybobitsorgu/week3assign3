var express = require('express')
var app = express()
var path = require('path')
var bodyparser = require('body-parser')

app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

var num = "3"

app.post('/generateTable', (req,res)=>{
    console.log("Request for table of size: " + req.body.size)
    num = req.body.size 
    res.redirect('index.html')
})
app.get('/getData',(req,res)=>{
    console.log("request for size. Returning: " + num)
    res.json({size: num})
})


app.use(express.static(__dirname+"/views"))
app.listen(3000, ()=>{
    console.log("Connected to port 3000")
})

