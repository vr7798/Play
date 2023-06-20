GNU nano 7.2              app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.get('/play', (req, res) => {
  const videoUrl = 'http://acsb.sh:80/movie/SstHxJjw/imagi>
  res.render('player', { videoUrl });
});

app.listen(PORT, () => {
  console.log("SERVIDOR RODANDO! NA PORTA", PORT);
});

