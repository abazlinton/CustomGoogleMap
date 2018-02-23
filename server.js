const express = require('express');
const app = express();
const path = require('path')
  
app.use(express.static('client/build'));

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('app listening at http://%s:%s', host, port);
});
