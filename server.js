const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()
//envirorment setup we don't need a variable
require('dotenv').config()

//config mustache
const mustache = mustacheExpress()
mustache.cache = null;
app.engine('mustache', mustache)
app.set('view engine','mustache')

app.get('/list', (req,res)=> {
  res.render('list')
})

//Use static files
app.use(express.static('public'));

app.listen(process.env.PORT,() => {
  console.log("running in port 5005");
})