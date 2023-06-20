GNU nano 7.2              app.js
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/play', (req, res) => {
  const videoUrl = 'http://acsb.sh:80/movie/SstHxJjw/imagi>
  res.render('player', { videoUrl });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
