const express = require('express');
const app = express();
const axios = require('axios');
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.get('/play', async (req, res) => {
  const videoUrl = 'http://acsb.sh:80/movie/SstHxJjw/imaginationteste/198712.mp4';

  try {
    // Faz uma solicitação GET para pré-carregar o vídeo usando o módulo axios
    await axios.get(videoUrl);

    console.log('Vídeo pré-carregado.');

    // Renderiza a visualização do player e passa a URL do vídeo pré-carregado
    res.render('player', { videoUrl: videoUrl });
  } catch (error) {
    console.error('Erro ao pré-carregar o vídeo:', error);
    res.send('Erro ao pré-carregar o vídeo.');
  }
});

app.listen(PORT, () => {
  console.log('SERVIDOR RODANDO! NA PORTA', PORT);
});
