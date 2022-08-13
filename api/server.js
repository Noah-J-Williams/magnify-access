const express = require('express');
const app = express();
const cors = require('cors');

//setup
app.use(cors);
app.use(express.json());

app.listen(5050, () => {
    console.log("🛰️ Launcing server on port 5050");
});
