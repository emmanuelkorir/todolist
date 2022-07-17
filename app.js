const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

//scope
let items = ['Buy Food', 'Cook Food', 'Eat Food'];
let workItems = [];

//setting view engine to ejs
app.set('view engine', 'ejs');

//use bodyparser
app.use(bodyParser.urlencoded({ extended: true }));

//express to use css, images files. create public directory
app.use(express.static('public'));

app.get('/', function (req, res) {
  let day = date();
  res.render('list', { listTitle: day, newListItems: items });
});

app.post('/', function (req, res) {
  let item = req.body.newItem;
  if (req.body.list === 'Work') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/');
  }
});

app.get('/work', function (req, res) {
  res.render('list', {
    listTitle: 'Work List',
    newListItems: workItems,
  });
});

app.listen(3000, function () {
  console.log('server started on port 3000');
});
