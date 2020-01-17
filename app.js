const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server is up on port 3000');
});
