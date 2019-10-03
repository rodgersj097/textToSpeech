var express = require('express');
var router = express.Router();
var MPlayer = require('mplayer');
var player = require('play-sound')({ player: "MPlayer-x86_64-r38135+gb272d5b9b6/mplayer.exe" })
var textToSpeech = require('../routes/controller/textToSpeech')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/getText', async (req, res, next) => {
  console.log(req.body.inputText)
  await textToSpeech.talk(String(req.body.inputText))

  player.play('./out.mp3', (err) => {
    if (err) console.log(`Could not plau sound : ${err}`)
  })
  res.end()
})

module.exports = router;
