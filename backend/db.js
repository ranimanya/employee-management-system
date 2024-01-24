const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/meanDB")
.then(() => console.log('Database connection successful'))
.catch((err) => {console.error(err);});