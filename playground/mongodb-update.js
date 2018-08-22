// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5b7bc9e881303b735e2def20")
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result)  => {
  //   console.log(result);
  // });

db.collection('User').findOneAndUpdate({
  name: "Bunty"
}, {
  $set: {
    name: "Kumar"
  },
  $inc: {
    age: 1
  }

}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});
  // db.close();
});
