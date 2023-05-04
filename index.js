const express = require('express')
var bodyParser = require('body-parser')
const route = require('./routes')

const app = express()
const port = 3000

const db = require('./config/db')
db.connect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//middleware
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());
app.use(bodyParser.json())


route(app);

app.listen(port, () => {
  console.log(`Fashion web listening on port ${port}`)
})

