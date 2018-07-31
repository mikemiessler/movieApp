var express = require("express");
var app = express();
var request = require("request");

    // set up ejs handling
app.set("view engine","ejs");


    // homepage-search route
app.get("/", function(req, res) {
   res.render("search"); 
   
   
});


    // results page route
app.get("/results", function(req, res) {
   var searchTerm = req.query.search;                                               // get search query  
   var url = "http://www.omdbapi.com/?s=" + searchTerm + "&apikey=thewdb";          //get search url
       
    // when user visits /results trigger API call
 request( url, function(error, response, body) {

    // open movie DB API info
 if(!error && response.statusCode == 200){                                          // if no errors
    var data = JSON.parse(body);                                                    // parses JSON data from API tunring into object from string
      res.render("results", {data: data});                                          //display raw JSON data in webpage
        }
        
    });
    
});




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("movieApp is running");
    
});