const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(`Connected to Mongo! Database` ))
  .catch(error => {
    console.error(`Error connecting to mongo`, error);
    process.exit(1);
  });