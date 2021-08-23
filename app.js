const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static('HackForLA'));
app.use(express.static('Home'));
app.use(express.static('JavaScript'));
app.use(express.static('JavaScript/JS_Exercises'));
app.use(express.static('JavaScript/JS_Exercises/AddAndRemoveItems'));
app.use(express.static('JavaScript/JS_Exercises/AddToList'));
app.use(express.static('JavaScript/JS_Exercises/Async_Await'));
app.use(express.static('JavaScript/JS_Exercises/BrowserOM'));
app.use(express.static('JavaScript/JS_Exercises/Classes'));
app.use(express.static('JavaScript/JS_Exercises/CreateElements'));
app.use(express.static('JavaScript/JS_Exercises/Form'));
app.use(express.static('JavaScript/JS_Exercises/MouseEvents'));
app.use(express.static('JavaScript/JS_Exercises/WatchShowcase'));
app.use(express.static('Notes'));
app.use(express.static('React'));

app.get('/', (request, response) => {
  response.send('index.html');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});