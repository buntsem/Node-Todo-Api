const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')
// var id = '5b861fbdf0463f3311a187d811';
var id = '5b7d982e0b28bd46fbdf1f0f';
// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('todo', todo);
// })

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('id not found');
//   }
//   console.log('find by id', todo);
// }).catch((e) => {
//   console.log(e);
// })
User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  };
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
