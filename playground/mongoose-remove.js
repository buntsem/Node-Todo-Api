const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')
// var id = '5b861fbdf0463f3311a187d811';
var id = '5b7d982e0b28bd46fbdf1f0f';

// Todo.remove({}).then((result) => {
//   console.log(result);
// })


// Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5b876790ea5d39fd0aec83ba').then((todo) => {
  console.log(todo);
});
