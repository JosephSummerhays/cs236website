const filestream = require('fs');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static('public'))

let qst = [];
let index = 0;

//this endpoint gets the list of proffesors from the proffesors.txt
// app.get('/proffesors', (request, response) => {
//   filestream.readFile('proffesors.txt', 'utf8', (err,data) => {
//     if (err) throw err;
//     var index = 0;
//     var array = [];
//     while (index !== data.length) {
//       var nextIndex = data.indexOf('\n',index);
//       array.push(data.substring(index, nextIndex));
//       index = nextIndex+1;//plus on to skip the new line char
//     }
//     response.status(200).send(array);
//     console.log("proffesors sent");
//   });
// });

app.post('/question', (request, response) => {
  qst.push({
    id:index,
    summary:request.body.head,
    question: request.body.question,
    name: request.body.name,
    answers: [],
    numAnswers: 0,
  });
  index++;
});

app.post('/reply', (request, response) => {
  console.log(request.body);
  console.log(qst[request.body.id]);
  qst[request.body.id].answers.push({
    answer: request.body.answer,
    name: request.body.name,
    id: qst[request.body.id].numAnswers,
  });
  qst[request.body.id].numAnswers += 1;
});

app.get("/question", (request, response) => {
  response.send(qst);
  console.log("sent questions");
});

app.listen(87, () => console.log("listening on port 87"));
