const express = require('express');
const cors = require('cors');
const conn = require('./src/db/mongoose');
const routes = require('./src/routes');

const app = express();

app.use(cors());
app.use(express.json());

routes(app);

conn
  .then(() => {
    app.listen(3003, () => console.log('Sever is running'));
  })
  .catch((err) => console.log(err));
