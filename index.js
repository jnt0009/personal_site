const express = require("express");
require('dotenv').config();
// require("./pitCrew.js");

const fs = require('fs');

const app = express();

const path = require('path');
const router = express.Router();
const port = process.env.PORT || 8080;

// const view = __dirname + '/views'
// const portfolio = __dirname + '/assets/portfolio'
app.use(express.static('public'));
app.use('/assets', express.static(__dirname + '/assets'));

router.get('/',function(req,res){
    console.log(router.stack);
    // res.sendFile(path.join(__dirname +'/views/index.html'));
    res.sendFile(__dirname + '/main.html')
    //__dirname : It will resolve to your project folder.
  });


router.get("/blog/data_hierarchy_of_needs", function(req, res){
  console.log(router.stack);
  res.sendFile(`${__dirname}/blogs/data_hierarchy_of_needs/blog.html`)
});

router.get("/blog/shiny_for_py", function(req, res){
  console.log(router.stack);
  res.sendFile(`${__dirname}/blogs/shiny_for_py/blog.html`)
});


const startServer = async function() {
    app.use('/', router);   
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}

startServer()
  .then(x => console.log(x))
  .catch(err => console.log(err))