const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());

app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});


app.listen(PORT, () => console.log(`Running Express Server on PORT ${PORT}`));
