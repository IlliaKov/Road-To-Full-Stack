import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    const data = {
        title: "Enter your name below 👇",
        firstName: req.body["fName"]
    };

    res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {

    const numLetters = req.body["fName"].length + req.body["lName"].length;

    res.render("index.ejs", { numberOfLetters: numLetters } );
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
