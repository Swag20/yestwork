const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) =>{
  var fs = require("fs");
  fs.readFile("openweathermap.raml", function (err, data) {
      if (err) throw err;
      res.status(200).send(data.toString());
      
  })
})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
