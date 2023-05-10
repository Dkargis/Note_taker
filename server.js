const express = require('express');
const path = require('path');
const api = require('./routes/apiRoutes.js');
const HTMLroutes = require('./routes/HTMLroutes.js');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);
app.use('/',HTMLroutes)




// app.post('/notes', (req, res) => {
//   console.log(req.body);
//   res.json(req.body);
// });

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);


