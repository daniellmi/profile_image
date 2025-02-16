const express = require("express");
const path = require("path");
const fs = require('fs');
const router = require('./routes/routes.js');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(router);
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client")));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

app.listen(port, () => console.log(`server running in ${port}`));

