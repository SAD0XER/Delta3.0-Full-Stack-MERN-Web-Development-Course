const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(express.json()); // parse application/json

app.get("/register", (req, res) => {
    console.log(req.query);
    let { username, password } = req.query; //
    res.send(`Standard GET response. Welcome ${username}!`);
});

app.post("/register", (req, res) => {
    console.log(req.body);
    let { username, password } = req.body;
    res.send(`Standard GET response. Welcome ${username}!`);
});

app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});

