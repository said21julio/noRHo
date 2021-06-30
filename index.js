
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();
const router = require('./backend/routes/index');

app.use(cors());
app.use(morgan('dev'));
app.use(router);
app.use(express.static('app/dist/app'));
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

