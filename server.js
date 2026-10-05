const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello! My server is working.');
});
app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});