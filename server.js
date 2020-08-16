const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const configKeys = require('./config/keys');
const errorLogger = require('./config/logger');
// passport config
require('./config/passport')(passport);
// routes
const users = require('./routes/users');


const app = express();



// middlewares
app.use(express.json());
app.use(express.urlencoded( { extended: false } ));
app.use(errorLogger);



// express session
app.use(session({
  secret: configKeys.sessionSecret,
  resave: true,
  saveUninitialized: true
}));



// passport middleware
app.use(passport.initialize());
app.use(passport.session());



// including routes
app.use('/users', users);



// connecting mondoDB
const mongoURI = configKeys.MongoURI;
mongoose.connect(mongoURI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true 
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));



// starting server and listening to port
const PORT = process.env.PORT || configKeys.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});