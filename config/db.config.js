const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://irondb:sA6uVRBNp5CYPq4C@irondb.qvkn3.mongodb.net/ixcool-admin?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));