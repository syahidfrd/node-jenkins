const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('new world 2');
});

app.listen(process.env.PORT || 5000);
module.exports = app;
