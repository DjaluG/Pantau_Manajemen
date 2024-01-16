const express = require('express');

const app = express();
const session = require('express-session');
const passport = require('passport');
const PORT = 3001;
const authRoutes = require('./routes/authRoutes')
const getuserRoutes = require('./routes/getuserRoutes')
const worksRoutes = require('./routes/worksRoutes')
const routineRoutes = require('./routes/routineTaskRoutes')


app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['X-Custom-Header']
}));

app.use(express.json());
app.use(express.urlencoded());
app.use(session({
  secret: 'rahasia',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());



// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/works', worksRoutes);
app.use('/api/v1/routine', routineRoutes);
app.use('/api/v1', getuserRoutes);

app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});


app.listen(PORT, () => console.log(`Running Express Server on PORT ${PORT}`));
