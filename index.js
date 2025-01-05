const express = require("express");
require('dotenv').config();

// require("./pitCrew.js");

const fs = require('fs');
const { marked } = require("marked");

const app = express();

const path = require('path');
const router = express.Router();
const port = process.env.PORT || 8080;



app.use(express.static('public'));
app.use('/assets', express.static(__dirname + '/assets'));

router.get('/',function(req,res){
    console.log(router.stack);
    // res.sendFile(path.join(__dirname +'/views/index.html'));
    res.sendFile(__dirname + '/main.html')
    //__dirname : It will resolve to your project folder.
  });

router.get("/links", function(req, res){
  console.log(router.stack);
  res.sendFile(`${__dirname}/links/links.html`)
});

router.get("/blog/:id", function(req, res){
  console.log(req);
  res.sendFile(`${__dirname}/blogs/${req.params.id}/blog.html`)
});

// Temporary routes 
router.get("/data_and_dining", function(req, res){
  console.log(req);
  let tmp_output = fs.readFileSync(`${__dirname}/blogs/data_and_dining/blog.md`, 'utf8');
  res.send(marked(tmp_output.toString()));
});

const startServer = async function() {
    app.use('/', router);   
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}

startServer()
  .then(x => console.log(x))
  .catch(err => console.log(err))