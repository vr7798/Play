const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");

app.get("/play", (req, res) => {
  const videoUrl =
    "http://acsb.sh:80/movie/SstHxJjw/imaginationteste/198712.mp4";
  res.render("player", { videoUrl: videoUrl });
});

app.listen(PORT, () => {
  console.log("SERVIDOR RODANDO! NA PORTA", PORT);
});
