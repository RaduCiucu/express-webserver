const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// CURRENT DIRECTORY PATH
app.use(express.static(__dirname));

// DEFAULT PAGE INDEX.HTML
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/index.html'));
});

app.listen(port);
console.log('Listening on port: ' + port);
