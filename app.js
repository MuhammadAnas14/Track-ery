const express = require('express');
const bodyParser = require('body-parser');

const app= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res)=> {
  res.send("all OK")
})

const port = process.env.PORT || 8080
app.listen(port,()=> console.log(`Server running on port ${port}`)) 