require('./config/config.js');


const _ = require('lodash');
var {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user')

var app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
      text: req.body.text
    });

    todo.save().then((doc) => {
      res.send(doc);
    })
    .catch ((error) => {
      res.status(400).send(error);
    });

    // , (error) => {
    //   res.status(400).send(error);
    // });
});
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  })
  .catch ((error) => {
    res.status(400).send(error);
  });
});
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  // validate id
    // res 404 todo not found send empty
  Todo.findById(id).then((todo) => {
    if (!todo){
      return res.status(404).send();
    }
    res.send({todo});
  })
  .catch ((error) => {
    res.status(400).send();
  })
    // find by id
    // success
    //error empty body back
  // res.send(req.params);
})
app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo){
      return res.status(404).send();
    }

    res.send({todo});
  })
  .catch ((error) => {
    res.status(400).send();
  })
});

app.patch('/todos/:id',(req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  }else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) =>  {
    if (!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((error) =>{
    res.status(400).send();
  })
})
app.listen(port, () => {
  console.log(`Stared on port ${port}`);
});


module.exports = {app};
