const express = require('express');  // should be a function

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
