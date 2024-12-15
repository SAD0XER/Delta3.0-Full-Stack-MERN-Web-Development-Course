const express = require("express");
const app = express();
const session = require("express-session");
const port = 8080;

app.use(session({ secret: "BishopTakesRook" }));

app.get("/test", (req, res) => {
    res.send("Test successful!");
});

app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});
