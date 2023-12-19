const express = require('express');

const app = express();
const session = require('express-session');
const passport = require('passport');
const PORT = 3001;
const authRoutes = require('./routes/authRoutes')
const getuserRoutes = require('./routes/getuserRoutes')

app.use(express.json());
app.use(express.urlencoded());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/v1/login', authRoutes);
app.use('/api/v1', getuserRoutes);

app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});


app.listen(PORT, () => console.log(`Running Express Server on PORT ${PORT}`));
