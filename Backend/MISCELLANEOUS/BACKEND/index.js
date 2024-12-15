const express = require("express");
const app = express();
const session = require("express-session");
const port = 8080;

app.use(session({ secret: "BishopTakesRook", resave: false, saveUninitialized: true }));

app.get("/requestcount", (req, res) => {
    if (req.session.count) req.session.count++;
    else req.session.count = 1; // If 'count' variable doesn't exit in the 'req.session', then create and initialize it.
    res.send(`Sending Request for ${req.session.count} times.`);
});

app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});
