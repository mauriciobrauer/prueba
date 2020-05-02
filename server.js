const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const routes = require('./routes');

const FeedbackService = require('./services/FeedbackService');
const SpeakerService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakerService = new SpeakerService('./data/speakers.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

console.log('Restarting');

app.use(express.static(path.join(__dirname, './static')));

app.use(
  '/',
  routes({
    feedbackService,
    speakerService,
  })
);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
